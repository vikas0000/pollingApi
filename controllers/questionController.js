//Import model or packages
const Question = require("../models/question");
const Option = require("../models/option");

//Create question route
module.exports.create_ques = function(req, res){
    
        
        var quest = Question.create({
            QUESTION: req.body.QUESTION
        });

        console.log( "Question Has Been Created");
        res.data= quest;
        return res.redirect("back");
}

//creating Option ROUTE
module.exports.createOpt = function(req, res){
   
        var quest = Question.findOne({_id: req.params.id});
        
        if(quest){
            
            const QUESTION = quest._id;
            const TEXT =  req.body.TEXT;

            var option = Option.create({
                QUESTION,
                TEXT
            });
            var link_Vote = req.protocol + "://" + req.headers.host + "/options/" + option._id + "/add_vote";
            option.link_Vote = link_Vote;
            option.save();
           
            //push the id
            quest.options.push(option._id);
            quest.save();

            //succesfull create
            console.log( "Option Has Been Successfully  Added!");
            res.data = option;
            return;

        }else{
            //error
            console.log( "Question not Found!");
            return res.redirect("back");
        }
    
}

//deleting Question route
module.exports.deleteQues = function(req, res){
    
        var quest = Question.findOne({_id: req.params.id}).populate("options");
        
        if(quest){
            if(quest.options.length > 0){
                var c = false;
                for(option of quest.options){
                    if(option.VOTE > 0){
                        
                        c = true;
                    }
                    
                }
                //check for the question deleted or not
                if(c){
                    
                    console.log( "Not able to delete")
                    return res.redirect("back");
                }
                //successfully deleted
                 Option.deleteMany({QUESTION: quest._id});
                 Question.deleteOne({_id: quest._id});
                
                console.log( "Deleted Successfully!")
                return;
            }
            
        }else{
            //not found question
            console.log("Question not Found!")
            return res.redirect("back");
        }
}

//listing all Questions ROUTE

module.exports.listQues =  function(req, res){

        var quest = Question.findOne({_id: req.params.id}).populate("options");
        if(quest){
                res.data = quest;
                return;
            
        }else{
            //not found
            console.log( "Question not Found!")
            return res.redirect("back");
        }
}