import { FETCH_COURSE_INFO, NEW_MODULE, TOGGLE_EDIT_COURSE } from '../actions/types';

const initialState = {
    courseInfo: {
        modules: []
    },
    editState: false
}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_COURSE_INFO:
            return {
                ...state,
                courseInfo: action.payload
            };
        case NEW_MODULE:
            return {
                ...state,
                courseInfo: {
                    modules: action.payload 
                }
            }; 
        case TOGGLE_EDIT_COURSE:
            return {
                ...state,
                editState: action.payload
            };
            
        default: return initialState;
    }

}