const http=require("http")
const server=http.createServer((req,res)=>{
   if(req.url==="/"){
    res.end("It is Home")
   }else if(req.url==="/about"){
    res.end("It is about")
   }
})

server.listen(8000,"127.0.0.1")



// const http=require("http")
// const fs=require("fs")
// const server=http.createServer((req,res)=>{
//    if(req.url==="/"){
//     const data=fs.readFile(`${__dirname}/Text.json`,'utf-8',(err,ele)=>{
//     const modified=JSON.parse(ele)
//     res.end(modified[0].title)
//     })
//    }else if(req.url==="/about"){
//     res.end("It is about")
//    }
// })

// server.listen(8000,"127.0.0.1")