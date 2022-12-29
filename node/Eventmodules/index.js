const EventEmitter=require("events")
const eve=new EventEmitter()

//First of all it is like a def function in pyton. But calling and creating function is slightly different.
eve.on("nandan",(status)=>{
    console.log("My name is nandan")
    console.log(status)
})
eve.on("nandan",()=>{
    console.log("My name is nandan_1")
})
eve.on("nandan",()=>{
    console.log("My name is nandan_2")
})
eve.on("nandan",()=>{
    console.log("My name is nandan_3")
})
eve.emit("nandan","ok")

