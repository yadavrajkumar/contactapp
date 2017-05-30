var mongoose = require("mongoose");
var contactSchema = mongoose.Schema({


            name : {

            	type : String,
                 required : true
            },
             
             email : {

            	type : String,
                 required : true
            },
             
             mobile : {

            	type : Number,
                 required : true
            }

});

var Contact = module.exports = mongoose.model("contact",contactSchema,"contact");

module.exports.createContact = function(contactObnj,callback){

return Contact.create(contactObnj,callback);

}

module.exports.getContact = function(callback){

return Contact.find(callback);

}


module.exports.getContactById = function(contactId,callback){

return Contact.findById(contactId,callback)

}
module.exports.updateContact = function(contactId,contactObj,callback){

return Contact.update({_id : contactId},
                      {$set : {

                      	   name : contactObj.name,
                      	    email : contactObj.email,
                      	     mobile : contactObj.mobile
                      }},
	                     callback )

}

module.exports.removeContact = function(contactId,callback){

return Contact.remove({_id:contactId},callback)

}

