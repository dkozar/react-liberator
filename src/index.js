import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { App } from './App';
import Index from './components/Index';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Demo3 from './components/Demo3';
import Demo4 from './components/Demo4';
import Demo5 from './components/Demo5';

render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="demo1" component={Demo1} />
            <Route path="demo2" component={Demo2} />
            <Route path="demo3" component={Demo3} />
            <Route path="demo4" component={Demo4} />
            <Route path="demo5" component={Demo5} />
            <Route path="demo5/:title/:text" component={Demo5} />
        </Route>
    </Router>
), document.getElementById('root'));