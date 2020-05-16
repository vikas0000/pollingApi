//Importing models
const Question = require("../models/question");
const Option = require("../models/option");

//delete option route
module.exports.deleteOption = async function(req, res){
    try{
        let opt = await Option.findOne({_id: req.params.id});
        if(opt){
            if(opt.votes > 0){
                
                return res.status(409).json({
                    message: "Not able to delete Option because it has votes in it!"
                });
            }

            await Opt.deleteOne({_id: req.params.id});
            return res.status(200).json({
                message: "Deleted Successfully!",
            });

        }else{
            
            return res.status(404).json({
                message: "Option not Found!"
            });
        }
    }catch(err){
        //Error in creating Question
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
    
}

// adding vote route
module.exports.addVote = async function(req, res){
    try{
        let opt = await Option.findOne({_id: req.params.id});
        if(opt){
            let current_Vote = opt.votes;
            opt.votes = current_Vote + 1;

            await opt.save();

            return res.status(200).json({
                message: "Option Vote Updated Successfully!",
            });
        }else{
            // Option not exists
            return res.status(404).json({
                message: "Option not Found!"
            });
        }
    }catch(err){
        // Error in creating Question
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}