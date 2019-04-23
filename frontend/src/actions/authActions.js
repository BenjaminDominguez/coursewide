import { RSAA } from 'redux-api-middleware';

//Auth Action Types

export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST'
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS'
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE'

export const TOKEN_REQUEST = '@@auth/TOKEN_REQUEST'
export const TOKEN_RECEIVED = '@@auth/TOKEN_RECEIVED'
export const TOKEN_FAILURE = '@@auth/TOKEN_FAILURE'

export const LOGOUT_REQUEST = '@@auth/LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = '@@auth/LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = '@@auth/LOGOUT_FAILURE'

export const REGISTER_REQUEST = '@@auth/REGISTER_REQUEST'
export const REGISTER_SUCCESS = '@@auth/REGISTER_SUCCESS'
export const REGISTER_FAILURE = '@@auth/REGISTER_FAILURE'

export const register = (userDetails) => (
    {
        [RSAA]: {
            endpoint: '/api/auth/register',
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: { 'Content-Type': 'application/json' },
            types: [
                REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE
            ]
        }
    }
)

export const login = (email, password) => (
    {
        [RSAA]: {
            endpoint: '/api/auth/login',
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json' },
            types: [
                LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
            ]
        }
    }
)

export const logout = (token) => (
    {
        [RSAA]: {
            endpoint: `/api/auth/logout`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            types: [
                LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE
            ]
        }
    }
)

export const refreshAccessToken = (token) => (
    {
        [RSAA]: {
            endpoint: '/api/auth/refresh/',
            method: 'POST',
            body: JSON.stringify({refresh: token}),
            headers: { 'Content-Type': 'application/json' },
            types: [
                TOKEN_REQUEST, TOKEN_RECEIVED, TOKEN_FAILURE
            ]
        }
    }
)