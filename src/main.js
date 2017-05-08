import React from 'react';
import ReactDOM from 'react-dom';
import HouseComponent from './components/HouseComponent';

ReactDOM.render(
  <div>
    <HouseComponent house="Gryffindor"/>
    <HouseComponent house="Hufflepuff"/>
    <HouseComponent house="Ravenclaw"/>
    <HouseComponent house="Slytherin"/>
  </div>,
  document.getElementById('app')
);
