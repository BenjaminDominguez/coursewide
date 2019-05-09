import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/css/main.css';
import App from './components/layout/App';
import Courses from './components/courses/Courses';
import Module from './components/module/Module';
import Register from './components/register/Register';
import Course from './components/course/Course';
import Languages from './components/languages/Languages';
import Login from './components/login/Login';
import Prospectives from './components/teacher/Prospectives';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store';
import Payment from './components/payment/Payment';
import * as routes from './routing';
import { StripeProvider } from 'react-stripe-elements';

const stripeAPIKEY = 'pk_test_tZPdcr7fAfy8Q9Rl3KKJy0Zp'

const app = (
    <Provider store={ store }>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/courses/:id" component={Course} />
                <routes.ModuleRoute path="/courses/:id/modules/:order" />
                <Route exact path="/languages" component={Languages} />
                <routes.LoginRoute exact path="/login" />
                <routes.CourseCreatorRoute path="/course/:id/creator" />
                <Route exact path="/teacher" component={Prospectives} />
                <StripeProvider apiKey={stripeAPIKEY}>
                    <routes.ProtectedPayment exact path="/payment" />
                </StripeProvider>
            </div>
        </Router>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
