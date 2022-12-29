const mongoose= require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/Nandandb").then(()=> console.log("connected"))

// Schema representation . It is mandatory for all 
const Playlistschema=new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:2,
        maxlength:30
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

//create collection
const Playlist=new mongoose.model('Playlist',Playlistschema)

//create document or insert
// const  createDocument=async ()=>{
//     try{
//         const reactplaylist=new Playlist({
//             name:'React js',
//             ctype:'Front end',
//             videos:80,
//             author:'Nandan Bilagi',
//             active:true,
//         })

//         const djangoplaylist=new Playlist({
//             name:'Djanog',
//             ctype:'Backend end',
//             videos:80,
//             author:'Nandan Bilagi',
//             active:true,
//         })
        // we need to wait this one. Because sometimes it may execute first before above data.
        // const result=await Playlist.insertMany([reactplaylist,djangoplaylist])
        // console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }
// createDocument()




//How to read th data using Node
const read_data=async()=>{
    // const result=await Playlist.find({ctype:"Front end"}).select({name:1})
    // console.log(result)

    //using $gt symbol => greater than
    // const result2=await Playlist.find({videos:{$gt:50}}).select({name:1})
    // console.log(result2)

    //using in operator
    // const result3=await Playlist.find({ctype:{$in:['Front end']}}).select({name:1})
    // console.log(result3)
}
// read_data()


//how to update data
// const updatedocument=async()=>{
//     const result=await Playlist.updateOne({name:'React js'},{ $set: { videos: 2 } })
// }
// updatedocument()



//how to delet data within database
const deletdata=async()=>{
    const result= await Playlist.deleteOne({name:"Djanog"})
}
deletdata()