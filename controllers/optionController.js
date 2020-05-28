//Importing models
const Option = require("../models/option");

//delete option route
module.exports.deleteOpt = function(req, res){
    
        let opt = Option.findOne({_id: req.params.id});

        if(opt){
            if(opt.VOTES > 0){
                
                console.log( "Not able to delete Option because it has votes in it!");
                return res.redirect('back');

            }

            Opt.deleteOne({_id: req.params.id});
            console.log("Deleted Successfully!");
            return;

        }else{
            
            console.log( "Option not Found!");
            return res.redirect('back');
        }
    
}

// adding vote route
module.exports.addVote = function(req, res){
    
        let opt = Option.findOne({_id: req.params.id});

        if(opt){
            var current_Vote = opt.VOTE;
            opt.VOTE = current_Vote + 1;

             opt.save();

            console.log("Option Vote Updated Successfully!");
            return;
            
        }else{
            // Option not exists
            console.log( "Option not Found!");
            return res.redirect("back");
        } 
}