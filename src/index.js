import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarApp } from './CalendarApp';

import './styles.css';

// window.oncontextmenu = function () {
//   return false;
// };

// document.addEventListener("keydown", function(event){
//   var key = event.key || event.keyCode;

//   if (key === 123) {
//       return false;
//   } else if ((event.ctrlKey && event.shiftKey && key == 73) || (event.ctrlKey && event.shiftKey && key == 74)) {
//       return false;
//   }
// }, false);


ReactDOM.render(
    <CalendarApp />,
  document.getElementById('root')
);
