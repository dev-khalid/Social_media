import sharp from 'sharp';
import asyncHandler from 'express-async-handler';
import base64 from 'base64-arraybuffer';

const imageOptimizer = asyncHandler(async (file,w,q) => {
  //please handle the buffer also from here 
  //multer sends the file .. and there is a property called buffer which contains buffer data . 

  let buffer = await sharp(file.buffer)
    .resize({
      width: w ,
    })
    .webp({
      quality: q,
      loosless: true,
    })
    .toBuffer();
  let imageFormat = 'data:image/webp;base64,';
  const imageStr = imageFormat + base64.encode(buffer); //this image  is now converted to base 64 string . 
  return imageStr;
});

export default imageOptimizer; 