import React from 'react';
import { isAuthenticated } from './reducers';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({component: Component, ...rest}) => {
    //useSelector is redux for React hooks. getting isAuthenticated from store 
    const { loggedIn } = useSelector(state => ({
        loggedIn: isAuthenticated(state)
    }));

    //If the user is logged in, render Component with props,
    //If not, redirect to login
    return (<Route {...rest} render={
        (props) => (
            loggedIn === true ?
            <Component {...props} /> :
            <Redirect to='/login' />
        )
    } />)
}