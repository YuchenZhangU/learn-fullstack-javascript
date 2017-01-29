import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(
  //<App headerMessage="Hello props!"/>,
  <App/>,
  document.getElementById('root')
);


// setTimeout(() =>{
//   ReactDOM.render(
//     <h2>....</h2>,
//     document.getElementById('root')
//   );
// }, 4000);


// // an simple example of React
// ReactDOM.render(
//   React.createElement('h2', null, 'Hello eee React'),
//   document.getElementById('root')
// );

// //jsx
// const color = Math.random() > 0.5 ? 'green' : 'red';

// ReactDOM.render(
//   <h2 style={{color}}>
//     Hello React with JSX!! -- {Math.random()}
//   </h2>,
//   document.getElementById('root')
// );

// // difference between jsx and html

// ReactDOM.render(
//   <h2 className="text-center">
//     Hello React with JSX!! -- {Math.random()}
//   </h2>,
//   document.getElementById('root')
// );



