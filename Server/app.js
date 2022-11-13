//using postman

const express = require("express");
const app = express();
const mongoose=require("mongoose")
const cors = require("cors")
app.use(express.json())
app.use(cors())


//mongodb Url, username and password
const mongoUrl="mongodb+srv://Angela:January2001@cluster0.dsi6rcm.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("Connected to database");})
.catch(e=>console.log(e))

require("./userDetails")
const User = mongoose.model("UserInfo")
app.post("/register",async(req,res)=>{
    const {fname, lname, email, password}=req.body;

    try{
        await User.create({
            fname,
            lname,
            email,
            password,
        })
        res.send({ status: "ok" })
    } catch (error) {
        res.send({ status: "error" })
    }
    
})
 app.listen(5000, () =>{
    console.log("Server started")
 })

