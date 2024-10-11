import mongoose from "mongoose";

const DB_Connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB_Connected");
        
    } catch (error) {
        console.log("ERROR: ",error);
     }
}

export default DB_Connect;