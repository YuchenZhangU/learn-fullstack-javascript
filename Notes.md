# Node

## Create Node Project
`npm init`
a project.json will be create to store the project info

`npm install`
install all package that list in the package.json file

`npm install PACKAGENAME`
command to install any package

`npm install --save PACKAGENAME`
install package and save the dependency in package.json

`npm i -S PACKAGENAME`
shortcut for the previos    command

`npm i --save-dev webpack`
install package and same as dev dependency


`npm i -D babel-cli babel-loader babel-preset-es2015 babel-preset-stage-2 babel-preset-react`

`npm i -D nodemon`

`npm i -D eslint eslint-plugin-react babel-eslint`

## Packages

__react__
describe user interfaces

__react dom__
render user interfaces

__webpack__
tools that translate modular code to something browsers understand today

__Babel__
As a webpack loader
transform the JSX extension code into what React understands
transform a few js feature that are not supported natively in all browsers

__nodemon__
auto restart node project when save
Nodemon is a utility that will monitor for any changes in your source and automatically restart your server

__eslint__
! important tool to check the code

## Node core http module

http is a core module, just import use absolute path.
req is the request, res is what is response to the user.
```javascript
import http from 'http';
const server = http.createServer((req, res) => {
  res.write('Hello HTTP!\n');
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});

server.listen(8080);
```

## Express.js
```javascript
import config from './config';
import express from 'express';
import apiRouter from './api';
server.use('/api', apiRouter);
server.use(express.static('public'));


server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});

// ./api/index.js file
import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
  res.send({data: 'test'});
});
export default router;
```



## Warning

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.17: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

__explain__
fsevent is on mac osx, on win and Linux will throw error. Just ignore!


## module
module have their own scope, variable in one module is not accessible for other moudle, unless import by other module.


## EJS (embed javascript)- dynamic templating language


## alternative for express.js

__koa__


__hapi__


__sails__



templating

__pug__


__handlebars__





# React
generating html with javascript
js object tree => html (__Virtual DOM__)

## Components State
__Stateless component__
use function syntaxs to create stateless component
const App = ()=>{}

__class based component__
class App extends React.Component{}
## Good Practice

* define one component in a file

## Components Lifecycle
1. Mount
2. change
3. remove

# commnad

__npm start__
defined in package.json

__npm run dev__
defined in package.json
use webpack to generate bundle.js file in public



# ?
webpack
package.json - scripts

#plan
* review the whole process and rewrite the whole program my self