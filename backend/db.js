const mongoose=require('mongoose')

<<<<<<< HEAD

=======
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
let url=process.env.MONGO_URL;
const connecttomongo=async () => {
    try{
        let URL=await mongoose.connect(url)
    console.log("connection established")
    }
    catch(e){
<<<<<<< HEAD
        console.log("failed",e);
    }
    
}
module.exports = connecttomongo;
=======
        console.log("failed");
    }
    
}
module.exports = connecttomongo;
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
