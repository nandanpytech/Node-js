const http=require("http")
const fs=require("fs")
const server=http.createServer()
server.on("request",(req,res)=>{
    //1st Method to show data.. But it is not a Streaming method . It downloads the whole data first and show us later..
    // var fs = require('fs');
    // fs.readFile(`${__dirname}/input.txt`, function (err, data) {
    //   if (err) return console.error(err);
    //   console.log(data.toString());
    // });

    //2nd Method is the Streaming methods..
    const rstream=fs.createReadStream(`${__dirname}/input.txt`)
    rstream.on("data",(chuckdata)=>{
        res.write(chuckdata)
    })
    rstream.on("end",()=>{
        res.end()
    })
})
server.listen(3000,"127.0.0.1")