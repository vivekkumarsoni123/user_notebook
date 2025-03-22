const mongoose=require('mongoose')

let url=process.env.MONGO_URL;
const connecttomongo=async () => {
    try{
        let URL=await mongoose.connect(url)
    console.log("connection established")
    }
    catch(e){
        console.log("failed");
    }
    
}
module.exports = connecttomongo;
