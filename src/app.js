import ReactDOM from 'react-dom';
import React, {Suspense} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {createHashHistory} from 'history';
import Loading from 'component/Loading';
import router from './router';
import '@babel/polyfill';

const history = createHashHistory();

const GetRouter = (props) => {
    return <Router history={props.history}>
        <Suspense fallback={<Loading/>}>
            {Object.keys(router).map((key) => {
                return <Route path={router[key].path} key={key} component={() => {
                    const Page = router[key].page;
                    return <Page history={props.history}/>
                }}/>
            })}
        </Suspense>
    </Router>
};


ReactDOM.render(<GetRouter history={history}/>, document.getElementById('root'));