import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();

app.use(cors())
app.use(bodyParser.json())

dotenv.config();


app.listen(process.env.PORT, ()=>{
    console.log(`server on port ${process.env.PORT}`);
})