import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
//Routes Import 
import postRoutes from './routes/posts.js'; 


 
//Image handling 
import multer from 'multer'; 
import sharp from 'sharp'; 
import base64 from 'base64-arraybuffer';
 




const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


const CONNECTION_URL =
  'mongodb+srv://AKASH:akash1234@memories.wivxtss.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successful Connection! 🚀🚀🚀'))
  .catch((err) => console.log('Failed connection . ❌❌❌\n',err.message));


//Start working from here 
app.get('/',(req,res,next) => { 
  res.send("Welcome to backend"); 
} ); 
app.use('/posts',postRoutes); 

/*
//file upload with multer 
const storage = multer.memoryStorage(); 
const upload = multer({storage}); 
app.post('/uploads',upload.single('chobi'),async (req,res,next) => { 
  //now introduce sharp   

  const input = Buffer.from(req.file.buffer);  
  const buffer = await sharp(input).resize({
    height: 240,
    width: 380,
  }).jpeg({
    quality: 80,
    chromaSubsampling: '4:4:4'
  }).toBuffer(); //image is resized and then buffered . 
  //use this buffer and make it a string 
  let imageFormat = 'data:image/jpeg;base64,';
  const image =imageFormat+ base64.encode(buffer); //this image  is now converted to base 64 string . 
   
  
  //now take the buffer and convert it to a base 64 string . 
  //here just upload the image to cloudinary . 
  //but isn't there any way to directly work with multer and react. 
  res.status(200).json({
    chobi: image
  })
})
const storageV2 = multer.diskStorage({
  destination: (req,file,cb) => { 
    cb(null,'upload/'); 
  }, 
  filename: (req,file,cb) => { 
    console.log('Whats inside the req?  : ', req); 
    console.log('inside file',file); 
    cb(null,file.originalname); 
  }
})

const uploadV2 = multer({storage: storageV2}); 
app.post('/upload',uploadV2.single('chobi'),(req,res) => { 
  console.log('found chobi',req.file);
  console.log('found data',req.body);  
  res.send('uploaded'); 
})

*/


app.listen(PORT , () => { 
  console.log(`Server running on port : ${PORT}`);    
})


 

 