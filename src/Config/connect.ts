import mongoose from "mongoose";

const connectDB= async()=>{
    try {
        const mongoURL= process.env.MONGODB_URL;
        if(!mongoURL){
            throw new Error("MOngoDB_URL is not defined")
        }

        await mongoose.connect(mongoURL)
        console.log("Mongodb connected")
    } catch (error) {
        if(error instanceof Error){
            console.error(`MongoDB failed: ${error.message}`)
        }
        else{
            console.error("Mongodb failed ")
        }
        process.exit(1)
    }
}

export default connectDB