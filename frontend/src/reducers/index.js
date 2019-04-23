import { combineReducers } from 'redux';
import authReducer, * as fromAuth from './authReducer';
import courseReducer, * as fromCourse from './courseReducer';

export default combineReducers({
    auth: authReducer,
    course: courseReducer
})

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors = state => fromAuth.errors(state.auth)
export const userID = state => fromAuth.userID(state.auth)
export const fullName = state => fromAuth.fullName(state.auth)
export const modules = state => fromCourse.modules(state.course)
export const JTI = state => fromAuth.JTI(state.auth)