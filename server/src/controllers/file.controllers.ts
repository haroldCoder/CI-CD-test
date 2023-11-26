import { Request, Response } from "express";
import file from "../models/files.models"
import multer from "multer";

const storage = multer.memoryStorage(); // Using memory storage for simplicity, adjust as needed
const upload = multer({ storage: storage });

const saveFile = (req: Request, res: Response) =>{
    upload.single('file')(req, res, (err: any) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
    
        const newFile = new file({
          name: req.file?.originalname,
          type: req.file?.mimetype,
          size: req.file?.size,
          content: req.file?.buffer,
        });
    
        // Saving the file information to the database
        newFile.save()
          .then(() => {
            res.status(200).json({ message: 'File uploaded successfully.' });
          })
          .catch((saveErr: any) => {
            res.status(500).json({ error: saveErr.message });
          });
      });
}

export default saveFile;