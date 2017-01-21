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

__eslint__
! important tool to check the code

## Warning

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.17: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

__explain__
fsevent is on mac osx, on win and Linux will throw error. Just ignore!