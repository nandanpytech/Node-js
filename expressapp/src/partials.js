const path=require('path')
const express=require("express")
var app=express()
const hbs=require("hbs")
const templatpath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,"../templates/partials")


app.set("view engine","hbs")

app.set("views",templatpath)               //How to change views folder to template folder       

hbs.registerPartials(partialsPath)

//template engine route
app.get("/",(req,res)=>{
    res.render("index",{name:"Nandan"})
})




//Port listening
app.listen(8000,()=>{
    console.log("Listning")
})