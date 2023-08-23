const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
app.use(express.static(__dirname)); 
app.listen(4000, () => {
  console.log('Server Works !!! At port 4000');
});
app.get('/download', (req, res) => {
  var URL = req.query.URL;
  res.header('Content-Disposition', 'attachment; filename="zaid.mp4"');
  ytdl(URL, {
    quality: 'highest',
    format: 'bestvideo+bestaudio',
  }).pipe(res);
});

