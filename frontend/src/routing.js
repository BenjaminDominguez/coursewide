import React from 'react';
import { isAuthenticated, isEnrolled, courseID } from './reducers';
import { useSelector } from 'react-redux';
import Login from './components/login/Login';
import { Route, Redirect } from 'react-router-dom';
import Module from './components/module/Module';

const loginMessage = 'Please login to see this course'

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
                pathname: '/login',
                state: {
                    message: loginMessage
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