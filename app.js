import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './src/db/index.js';
import { postUserData } from './src/routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/v1', postUserData)

connectDB().then(() => {
    app.on("Throwing error while establishing connection : ", (error) => {
        console.log("Error : ", error);
        throw error
    })
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
    })
}
)