const mongoose=require('mongoose')
const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGODBURL).then(console.log("MongoDb is Connected"))
    } catch (error) {
        console.log(error);
    }
}
module.exports=connectDb