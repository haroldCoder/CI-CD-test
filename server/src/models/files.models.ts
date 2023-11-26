const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: Number, required: true },
  content: { type: Buffer, required: true },
  uploadDate: { type: Date, default: Date.now }
});

const file = mongoose.model('testfile', fileSchema);

export default file;