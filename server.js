import config from './config';
import apiRouter from './api';
//import fs from 'fs';
import express from 'express';

const server = express();
// set a view engine - embeded javascript
server.set('view engine', 'ejs');
console.log(config);

server.get('/', (req, res) => {
  //res.send('\nHello Express');
  res.render('index', {
    content: 'Hello Express and <em>EJS</em>!',
  });
});

// server.get('/about.html', (req, res) => {
//   fs.readFile('./about.html', (err, data) => {
//     res.send(data.toString());
//   });
// });

//simpler way to server all static asset like html
// .use: exprss middleware stack; 'public' where we want static assets to be hosted in our file system
server.use('/api', apiRouter);
server.use(express.static('public'));
server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});