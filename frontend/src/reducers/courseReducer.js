import * as course from '../actions/courseActions';

const initialState = {
    courseID: null,
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
                courseID: action.payload.course_info.id,
                courseName: action.payload.course_info.name,
                courseDescription: action.payload.course_info.description,
                instructorName: action.payload.course_info.teacher.name,
                modules: action.payload.modules
                }
        default: return state;
    }
}

export function courseID(state){
    return state.courseID
}

export function modules(state) {
   return state.modules 
}

export function courseName(state) {
    return state.courseName
}

export function courseDescription(state){
    return state.courseDescription
}

export function instructorName(state){
    return state.instructorName
}