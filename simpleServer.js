// // when import something, node import the default object
// // to import no-default export, we need to use destructure syntax
// import config, {nodeEnv, logStars} from './config';
// console.log(config, nodeEnv);
// logStars('a imported function');


// import https from 'https';
// //https.request()
// https.get(
//   'https://www.lynda.com',
//   res => {
//     console.log('Response status code: ', res.statusCode);
//     res.on('data', chunk => {
//       console.log(chunk.toString());
//     });
//   });


// use https as a server
import http from 'http';
const server = http.createServer((req, res) => {
  res.write('Hello HTTP!\n');
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});

server.listen(8080);
// Othe way to listen 'request'
// server.on('request', (req, res) => {
//   res.write('Hello HTTP!\n');
//   setTimeout(() => {
//     res.write('I can stream!\n');
//     res.end();
//   }, 3000);
// });

