const express=require("express")
var app=express()

app.get('/',(req,res)=>{
    res.write("Hi I am nandan")
//    res.end("Hello nandan")
})
app.get('/about',(req,res)=>{
   res.end("Hello nandan, It is about page..")
})

//Json data showing
app.get('/contact',(req,res)=>{
   res.json({
    id:1,
    name:"Nandan"
   })
})

//Error page
app.get('*',(req,res)=>{
    res.send("404 not found")
})

//Port listening
app.listen(8000,()=>{
    console.log("Listning")
})