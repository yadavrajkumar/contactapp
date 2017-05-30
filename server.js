var express = require("express");
var app = express();
var router = express.Router();
var mongoose =require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var Contact = require("./models/contact")





app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb://localhost/contactdb-app",function(){

       console.log("Hii !! you have successfully connected with mongo db")


})





/*router.get("/",function(request,response){

    response.json("This is MEAN tack app")

})*/




router.post("/createContact",function(request,response){
     
     
       var contactObj =request.body;

     Contact.createContact(contactObj,function(err,data){
        
         if(err){

          throw err;
         }

         response.json(data);

     })

})


router.get("/getContact",function(request,response){
     

     Contact.getContact(function(err,data){
        
         if(err){

          throw err;
         }

         response.json(data);

     })

})

router.get("/getContactById/:id",function(request,response){
     
       var contactId = request.params.id;
       console.log(contactId)
     
     Contact.getContactById(contactId,function(err,data){
        
         if(err){

          throw err;
         }

         response.json(data);

     })

})


router.put("/updateContact/:id",function(request,response){


      


      var contactId = request.params.id;
      //console.log("update"+contactId)
      var contactObj = request.body;
     
     
     Contact.updateContact(contactId,contactObj,function(err,data){
        
         if(err){

          throw err;
         }

         response.json(data);

     })

})


router.delete("/removeContact/:id",function(request,response){
      

      var contactId = request.params.id;
     
     Contact.removeContact(contactId,function(err,data){
        
         if(err){

          throw err;
         }

         response.json(data);

     })

})


app.use("/",router);

var PORT = process.env.PORT || 2020;
app.listen(PORT,function(){


  console.log("Server is listening at port "+PORT);
})