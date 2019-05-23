const express = require('express');
const formidable = require('express-formidable');
const fs = require('fs');
const app = express();

app.use(express.static('public'));
app.use(formidable());

app.post('/create-post', (req, res) => {
  let dataFormat = {}
  dataFormat[Date.now()] = req.fields.blogpost
  fs.writeFile('data/posts.json', JSON.stringify(dataFormat), (error) => {
  });
});

app.listen(3000, () => {
  console.log('Server is litening on port 3000. ready to accept requests!');
});

