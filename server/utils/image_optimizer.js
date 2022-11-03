import sharp from 'sharp';
import asyncHandler from 'express-async-handler';
import base64 from 'base64-arraybuffer';

export const imageOptimizer = asyncHandler(async (file,w,q) => {
  let buffer = await sharp(file)
    .resize({
      width: w ,
    })
    .webp({
      quality: q,
      loosless: true,
    })
    .toBuffer();
  let imageFormat = 'data:image/jpeg;base64,';
  const imageStr = imageFormat + base64.encode(buffer); //this image  is now converted to base 64 string .

  return imageStr;
});
