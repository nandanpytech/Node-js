const fs=require("fs")
// fs.writeFileSync("read.txt","Welcome to my channel")
// fs.writeFileSync("read.txt","Welcome to my ")          //It over-rides the first one.
// fs.appendFileSync("read.txt","channel")
// const buf_data=fs.readFileSync("read.txt","utf-8")    //It is reading file and converted it to
// console.log(buf_data)

//challenge of the day:
// fs.mkdirSync("nandan_chanllenge")                                      //to create folder
// fs.writeFileSync("nandan_chanllenge/bio.txt","My name is Nandan")        //to create file in that folder..


// Asynchronous
fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data)
})
