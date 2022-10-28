import sharp from 'sharp';
import asyncHandler from 'express-async-handler';
import base64 from 'base64-arraybuffer';

export const imageOptimizer = asyncHandler(async (file, q) => {
  let buffer = await sharp(file).jpeg({
      quality: q,
      chromaSubsampling: '4:4:4',
    })
    .toBuffer();
  let imageFormat = 'data:image/jpeg;base64,';
  const imageStr = imageFormat + base64.encode(buffer); //this image  is now converted to base 64 string .
  console.log("what about this: ",imageStr); 
  return imageStr;
});
