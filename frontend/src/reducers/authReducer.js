import jwtDecode from 'jwt-decode';
import { courseID } from '../reducers';
import * as auth from '../actions/authActions';

const initialState = {
    access: undefined,
    refresh: undefined,
    userDetails: undefined,
    errors: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case auth.REGISTER_SUCCESS:
        case auth.LOGIN_SUCCESS:
            return {
                access: {
                    token: action.payload.access,
                    ...jwtDecode(action.payload.access)
                },
                refresh: {
                    token: action.payload.refresh,
                    ...jwtDecode(action.payload.refresh)
                },
                userDetails: {
                    ...jwtDecode(action.payload.access).user_claims
                },
                errors: {}
            }
        case auth.TOKEN_RECEIVED:
            return {
                ...state,
                access: {
                    token: action.payload.access,
                    ...jwtDecode(action.payload.access)
                }
            }
        case auth.REGISTER_FAILURE:
        case auth.LOGIN_FAILURE:
        case auth.TOKEN_FAILURE:
            return {
                access: undefined,
                refresh: undefined,
                userDetails: undefined,
                errors: action.payload.response || { 'non_field_errors': action.payload.statusText }
            }
        case auth.LOGOUT_SUCCESS:
            return {
                access: undefined,
                refresh: undefined,
                userDetails: undefined,
                errors: {}
            }
        case auth.CLEAR_ERRORS:
            return {
                ...state,
                errors: {}
            }
        case auth.UPDATE_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload
            }
        default:
            return state
    }
}

export function accessToken(state) {
    if (state.access) {
        return state.access.token
    }
}

export function refreshToken(state) {
    if (state.refresh) {
        return state.refresh.token
    }
}

export function JTI(state) {
    if (state.refresh) {
        return state.refresh.jti
    }
}

export function isAccessTokenExpired(state) {
    if (state.access && state.access.exp) {
        return 1000 * state.access.exp - (new Date().getTime()) < 5000
    }
    return true;
}

export function isRefreshTokenExpired(state) {
    if (state.refresh && state.refresh.exp) {
        return 1000 * state.refresh.exp - (new Date().getTime()) < 5000
    }
    return true;
}

export function isAuthenticated(state) {
    return !isRefreshTokenExpired(state)
}

export function errors(state) {
    return state.errors
}

export function userID(state) {
    if (state.userDetails) {
        return state.userDetails.user_details.id
    }
}

export function fullName(state) {
    if (state.userDetails) {
        return state.userDetails.user_details.name
    }
}

export function email(state) {
    if (state.userDetails) {
        return state.userDetails.user_details.email
    }
}

export function coursesTaking(state) {
    if(state.userDetails && state.userDetails.student_details.courses_taking) {
        return state.userDetails.student_details.courses_taking.map((course) =>({
            courseID: course.course_info.id,
            courseName: course.course_info.name
        }))
    }
}