//Import model or packages
const Question = require("../models/question");
const Option = require("../models/option");

//Create question route
module.exports.create_question = async function(req, res){
    try{
        
        let quest = await Question.create({
            question: req.body.question
        });

        return res.status(201).json({
            message: "Question Has Been Created",
            data: quest
        });

    }catch(err){
        // Error in creating Question
        return res.status(400).json({
            message: "Internal Server Error"
        });
    }
}

//creating Option ROUTE
module.exports.createOption = async function(req, res){
    try{
        let quest = await Question.findOne({_id: req.params.id});
        if(quest){
            
            const question = quest._id;
            const text =  req.body.text;

            let option = await Option.create({
                question,
                text
            });
            let link_Vote = req.protocol + "://" + req.headers.host + "/options/" + option._id + "/add_vote";
            option.link_Vote = link_Vote;
            await option.save();
           
            //push the id
            quest.options.push(option._id);
            await quest.save();

            //succesfull create
            return res.status(200).json({
                message: "Option Has Been Successfully  Added!",
                data: option
            });

        }else{
            //error
            return res.status(404).json({
                message: "Question not Found!"
            });
        }
        

    }catch(err){
        //error
        return res.status(400).json({
            message: "Internal Server Error"
        });
    }
    
}

//deleting Question route
module.exports.deleteQuestion = async function(req, res){
    try{
        let quest = await Question.findOne({_id: req.params.id}).populate("options");
        if(quest){
            if(quest.options.length > 0){
                let check = false;
                for(option of quest.options){
                    if(option.votes > 0){
                        
                        check = true;
                    }
                    
                }
                //check for the question deleted or not
                if(check){
                    
                    return res.status(409).json({
                        message: "Not able to delete Question because options has votes in it!",
                        
                    });
                }
                //successfully deleted
                await Option.deleteMany({question: quest._id});
                await Question.deleteOne({_id: quest._id});
                return res.status(200).json({
                    message: "Deleted Successfully!",
                    
                });
            }
            
        }else{
            //not found question
            return res.status(404).json({
                message: "Question not Found!"
            });
        }
    }catch(err){
        //error
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

//listing all Questions ROUTE

module.exports.listQuestion = async function(req, res){

    try{
        let quest = await Question.findOne({_id: req.params.id}).populate("options");
        if(quest){
         
            return res.status(200).json({
                data: quest
            });
        }else{
            //not found
            return res.status(404).json({
                message: "Question not Found!"
            });
        }
    }catch(err){
        //error
        return res.status(400).json({
            message: "Internal Server Error"
        });
    }
}