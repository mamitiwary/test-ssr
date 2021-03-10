import path from 'path';
import fs from 'fs';

import express from 'express';
import serverless from "serverless-http"

const PORT = process.env.PORT || 3006;
const app = express();
app.get('/', (req, res) => {
  console.log("start / path")  
    const indexFile = path.resolve('../build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      console.log("load / path "+data)
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
      data = data.replace(/\$OG_TITLE/g, 'Superpro.ai');
      data = data.replace(/\$TITLE/g, 'Superpro.ai');
      res.send(data);
    });
  });

  app.get('/one', (req, res) => {
    console.log("start /one path")  
      const indexFile = path.resolve('../build/index.html');
      fs.readFile(indexFile, 'utf8', (err, data) => {
        console.log("load / path")
        if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
        }
        data = data.replace(/\$OG_TITLE/g, 'Superpro.ai1');
        data = data.replace(/\$TITLE/g, 'Superpro.ai1');
        let result = data.replace(
          /\$DESCRIPTION/g,
          'Focus on what you do best, let us take care of the rest'
        );
        res.send(result);
      });
    });
  

  app.get('', (request, response) => {
    console.log('empty path');
  });
  
  
  app.use(express.static('../build'));
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
  exports.handler = serverless(app)
