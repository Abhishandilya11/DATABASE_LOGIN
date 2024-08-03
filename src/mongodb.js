const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Loginsigndb")
.then(()=>{
    console.log("mongodb connected ");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        Unique:true
    },
    password:{
        type:String,
        required:true,
        Unique:true
    }
})

const SignUpSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        Unique:true
    }
    password:{
        type:String,
        required:true,
        Unique:true
    }
})

const collection=new mongoose.model("collection",LogInSchema)

module.exports=collection