import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGO_URI!, {});

const conexion = mongoose.connection;

conexion.on('error', console.error.bind(console, 'err mongodb:'));
conexion.once('open', () => {
    console.log('Conect to MongoDB');
});


export default conexion;