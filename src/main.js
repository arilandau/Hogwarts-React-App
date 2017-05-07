import React from 'react';
import ReactDOM from 'react-dom';
import HouseComponent from './components/HouseComponent';

let hogwartsHouses = <div>
  <HouseComponent house="Gryffindor" />
  <HouseComponent house="Hufflepuff" />
  <HouseComponent house="Ravenclaw" />
  <HouseComponent house="Slytherin" />
</div>

ReactDOM.render(
  hogwartsHouses,
  document.getElementById('app')
);
