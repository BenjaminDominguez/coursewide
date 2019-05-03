import { combineReducers } from 'redux';
import authReducer, * as fromAuth from './authReducer';
import courseReducer, * as fromCourse from './courseReducer';

export default combineReducers({
    auth: authReducer,
    course: courseReducer
})

//Auth/user functions
export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors = state => fromAuth.errors(state.auth)
export const userID = state => fromAuth.userID(state.auth)
export const fullName = state => fromAuth.fullName(state.auth)
export const JTI = state => fromAuth.JTI(state.auth)
export const email = state => fromAuth.email(state.auth)
export const coursesTaking = state => fromAuth.coursesTaking(state.auth)

//Course functions
export const courseName = state => fromCourse.courseName(state.course)
export const modules = state => fromCourse.modules(state.course)
export const courseDescription = state => fromCourse.courseDescription(state.course)
export const instructorName = state => fromCourse.instructorName(state.course)
export const courseID = state => fromCourse.courseID(state.course)

//Combined course and auth functions
export const isEnrolled = state => {
    let enrolled = false;
    if(isAuthenticated(state) && coursesTaking(state)) {
        const courseIDS = coursesTaking(state).map(course => course.courseID)
        enrolled = courseIDS.includes(courseID(state))
    }
    return enrolled;
}