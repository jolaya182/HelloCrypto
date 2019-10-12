/* *
  title: index.js 

  date: 10/10/2019

  author:  javier olaya

  description: component that handles the main logic for accessing and organizing the 
         
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

/* define the state properties of the  */
ReactDom.render((
  <App></App>
), document.getElementById("app"));