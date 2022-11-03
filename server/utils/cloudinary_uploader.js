//this file should handle the things related to cloudinary upload.
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
//here first resize the image then upload to cloudinary . 

export const uploadFile = async (file) => {
  //it's duty is to recieve a file and upload it and give back the result to the caller

  const result = await cloudinary.uploader.upload(file, {
    upload_preset: 'khalid',
    folder: 'social_media',
  });
  console.log("Data from cloudinary " , result);
  return result; 
};
