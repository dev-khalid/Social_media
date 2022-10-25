import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//Routes Import 
import postRoutes from './routes/posts.js'; 


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







app.listen(PORT , () => { 
    console.log(`Server running on port : ${PORT}`);    
})

//i am happy  as i am getting the power back . 