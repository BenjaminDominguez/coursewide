import React from 'react';
import ReactDOM from 'react-dom';
import './css/css/main.css';
import App from './main/App';
import Courses from './components/courses/Courses';
import Register from './components/register/Register';
import Course from './components/course/Course';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/register" component={Register} />
            <Route path="/course/:id" component={Course} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
