const path=require('path')
const express=require("express")
var app=express()

const templatpath=path.join(__dirname,'../templates')
const staticPath=path.join(__dirname,'../Public')                //To get Public folder
// app.use(express.static(staticPath))



//hOw to show hbs views folder hbs
app.set("view engine","hbs")
//template engine route
app.get("",(req,res)=>{
    res.render("index",{name:"Nandan"})
})


//How to change views folder to template folder
app.set("views",templatpath)



//Port listening
app.listen(8000,()=>{
    console.log("Listning")
})