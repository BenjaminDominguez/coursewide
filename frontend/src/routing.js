import React from 'react';
import { isAuthenticated, isEnrolled, isTeacherOfCourse, courseID, courseName } from './reducers';
import { useSelector } from 'react-redux';
import Login from './components/login/Login';
import { Route, Redirect } from 'react-router-dom';
import Module from './components/module/Module';
import Payment from './components/payment/Payment';
import CourseCreator from './components/coursecreator/CourseCreator';

const grabFromStore = (func) => {
    const { data } = useSelector(state => ({
        data: func(state)
    }))
    return data
}


/* 
Routing for the login. If user is authneticated, redirect them to the
index page.
*/
export const LoginRoute = ({...args}) => {
    const loggedIn = grabFromStore(isAuthenticated)

    return (<Route {...args} render={
        props => (
            loggedIn ?
            <Redirect to="/" /> :
            <Login {...props} />
        )
    } />)
}

/*
General protected route. If used is not authenticated, redirect them to the login.
*/

export const ProtectedRoute = ({component: Component, ...rest}) => {
    //useSelector is redux for React hooks. getting isAuthenticated from store 
    const loggedIn = grabFromStore(isAuthenticated)

    //If the user is logged in, render Component with props,
    //If not, redirect to login
    return (<Route {...rest} render={
        (props) => (
            loggedIn ?
            <Component {...props} /> :
            <Redirect to={{
                pathname: '/register',
                state: {
                    message: "Please create an account to purchase this course!"
                }
            }} />
        )
    } />)
}

export const ProtectedPayment = ({...args}) => {
    const loggedIn = grabFromStore(isAuthenticated)
    const nameOfCourse = grabFromStore(courseName)
    const message = nameOfCourse ? `Please create an account to purchase ${nameOfCourse}` : null

    return (<Route {...args} render={
        (props) => (
            loggedIn ?
            <Payment {...props} /> :
            <Redirect to={{
                pathname: '/register',
                state: {
                    message: message
                }
            }} />
        )
    } />)
}

export const ModuleRoute = ({...rest}) => {
    const isEnrolledInCourse = grabFromStore(isEnrolled)
    const idForCourse = grabFromStore(courseID)

    return (<Route {...rest} render={
        (props) => (
            isEnrolledInCourse ?
            <Module {...props} /> :
            <Redirect to={`/courses/`} />
        )
    } />)
}

export const CourseCreatorRoute = ({...rest}) => {
    const isTeacherCourse = grabFromStore(isTeacherOfCourse);

    return (<Route {...rest} render={
            (props) => (
                isTeacherCourse ?
                <CourseCreator {...props} /> : 
                <Redirect to='/' />
            )
        }/>
    )
}