const mongoose=require("mongoose");

const db=async () =>{
    try {
         mongoose.set('strictQuery',false)
         await mongoose.connect(process.env.MONGO_DB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,  // Increase timeout to 30 seconds
  socketTimeoutMS: 45000            // Socket timeout for longer operations
})
         console.log("Db connected");
    } catch (error) {
        console.log("DB Connection Error");
    }
}

module.exports={db};

