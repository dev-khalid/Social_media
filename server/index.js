import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv'; 

//Routes Import
import postRoutes from './routes/posts.js';

/*
//all about image upload
import uploader from './utils/file_uploader.js';
import { imageOptimizer } from './utils/image_optimizer.js';
import { uploadFile } from './utils/cloudinary_uploader.js';
*/

dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL = process.env.MONGO_URI;
const BACKUP_CONNECTION_URI = process.env.MONGO_BACKUP_URI; 
const PORT = process.env.PORT || 5000;
 
 
mongoose
  .connect(BACKUP_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Successful Connection! 🚀🚀🚀'))
  .catch((err) => console.log('Failed connection . ❌❌❌\n', err.message));
 

//Start working from here
app.get('/api', (req, res, next) => {
  res.send('Backend running!');
});
app.use('/api/posts', postRoutes);
/*
Optimized image upload with cloudinary demo. 
app.post('/api/upload', uploader.single('chobi'), async (req, res) => {
  const file = req.file; 
  const optimizedOne = await imageOptimizer(file.buffer,100,50);  
  const result = uploadFile(optimizedOne); 

  res.send(optimizedOne);
});

*/

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
