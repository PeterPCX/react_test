import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return (
    <div>
      <ValidIndicator/>
    </div>
  );
}

function Hello() {
  return (
    <React.Fragment>
      <span>Hello</span>
      <span>World</span> !
   </React.Fragment>
 );
}

function ValidIndicator() {
  var isValid = true;
  return (
    <span>{isValid ? 'valid' : 'not valid'}</span>
  );
}

ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root'));
