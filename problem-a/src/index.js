import React from 'react';
import ReactDOM from 'react-dom';
import senatorData from './senators.json'

//render the App component here!
import { App } from './App';

ReactDOM.render(<App senators={senatorData} />, document.getElementById('root'));