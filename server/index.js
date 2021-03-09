import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();
app.get('/', (req, res) => {
  console.log("start / path")
    const app = ReactDOMServer.renderToString(<App />);
  
    const indexFile = path.resolve('./public/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      console.log("load / path")
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  });

  app.get('', (request, response) => {
    console.log('empty path');
  });
  
  
  app.use(express.static('./public'));
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });