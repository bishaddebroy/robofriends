import React from 'react'; // webpack for bundling and other packages underneath the react. it is needed for all the dependencies.
import ReactDOM from 'react-dom/client'; // import the virtual DOM from React, it is for websites. react native for mobles.
import './index.css'; // ./ means in the same directory as the index.js 
//import App from './App'; // if no type after the file, it is javascript by default. components are capitalized.
import Card from './Card'; // first component
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robots} from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
