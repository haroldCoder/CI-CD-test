import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import conexion from "./connection/Mongodbconnect";
import saveFile from "./controllers/file.controllers";

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.post("/", (req: Request, res: Response)=>{
    saveFile(req, res);
})


app.listen(process.env.PORT, ()=>{
    console.log(`server on port ${process.env.PORT}`);
    conexion;
})