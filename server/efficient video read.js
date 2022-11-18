import fs from 'fs';
import dirname from './utils/current_directory.js';

app.get('/video', function (req, res) {
  // Ensure there is a range given for the video
  const range = req.headers.range;
  if (!range) {
    res.status(400).send('Requires Range header');
  }

  //const videoPath = `${dirname(import.meta.url)}/video.mp4`;
  const videoPath =
    'https://jucundu.s3.eu-central-1.amazonaws.com/videos%2Fvideo_for_test_21min-----avdaoE7TWhtTrTst2jHE_.mp4';
  const videoSize = fs.statSync(videoPath).size;
  const CHUNK_SIZE = 10 ** 6; // 1MB
  console.log('Inside range header: ', range);
  const start = Number(range.replace(/\D/g, ''));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  console.log('whats inside ', start, end);
  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  };

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  // create video read stream for this particular chunk
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // Stream the video chunk to the client
  videoStream.on('data', (buffer) => {
    console.log(buffer);
  });
  videoStream.pipe(res);
});
