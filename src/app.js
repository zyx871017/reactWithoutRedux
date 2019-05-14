import ReactDOM from 'react-dom';
import React, {Suspense} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import Loading from 'component/Loading';
import router from './router';
import '@babel/polyfill';

const getRouter = (history) => {

};


ReactDOM.render(<Loading/>, document.getElementById('root'));