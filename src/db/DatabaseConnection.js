import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../utils/index.js";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log("MongoDB :", error);
        process.exit(1);
    }
}
