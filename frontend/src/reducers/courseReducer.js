import * as course from '../actions/courseActions';

const initialState = {
    courseName: null,
    courseDescription: null,
    instructorName: null,
    modules: []
}

export default (state=initialState, action) => {
    switch(action.type) {
        case course.COURSE_INFO_REQUEST:
            console.log('COURSE_INFO_REQUEST ran')
            return {
                courseName: action.payload.name,
                courseDescription: action.payload.description,
                modules: action.payload.modules
                }
        default: return state;
    }
}

export function modules(state) {
   return state.modules 
}