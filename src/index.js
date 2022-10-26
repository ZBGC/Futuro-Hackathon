import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navvy from './nav';
import Body from './body';
import Budget from './Budget';
import Footer from './footy';
import Calc from './calc'
import Contain from './cont';
import Res from './Resource';
import Reward from './rewards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navvy/>
    <App />
    <Body/>
    <Budget/>
    <Calc/>
    <Contain/>
    <Res/>
    <Reward/>
    <Footer/>
    
    
  </React.StrictMode>
);

setTimeout(() =>{
  const element = document.getElementById('fades', {behavior: 'smooth'});
  element.remove(); 
},4100)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
