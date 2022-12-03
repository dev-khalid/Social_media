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

const PORT = process.env.PORT || 5000;
console.log('mongo uri', process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successful Connection! 🚀🚀🚀'))
  .catch((err) => console.log('Failed connection . ❌❌❌\n', err.message));

//Start working from here
const promiseA = (val) => {
  return new Promise((res, rej) => {
    if (val >= 100) {
      res(val);
    } else {
      rej('value less than 100 so rejected');
    }
  });
};

app.get('/api', async (req, res, next) => {
  let val = await promiseA(req.query?.val || 10);
  res.json(val);
});
import os from 'os';
console.log('operating system : ', os.hostname());
app.get('/ok', (req, res) => {
  res.json({
    message: 'Hello from a container',
    host: os.hostname(),
  });
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

app.listen(5000, () => {
  console.log(process.env.PORT);

  console.log(`Server running on port : ${PORT}`);
});
