import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Newlead from './Newlead';
//import LeadDashboard from './LeadDashboard';
//import Department from './Department';
import * as serviceWorker from './serviceWorker';
//import Comment from './Comment';
//import Attachment from './Attachment';
// import Test1 from './Test1';
import 'bootstrap/dist/css/bootstrap.min.css';  
ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<Test1/>, document.getElementById('root'));
// ReactDOM.render(<Newlead/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
