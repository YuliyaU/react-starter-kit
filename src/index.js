import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '../src/components/App';

window.React = React;

ReactDOM.render(
    <App />, 
    document.getElementsByTagName('body')[0]
);