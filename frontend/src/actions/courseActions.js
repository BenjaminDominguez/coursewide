export const COURSE_INFO_REQUEST = 'COURSE_INFO_REQUEST'

export const getCourseInfo = (courseID) => dispatch => {
    fetch(`/api/courses/${courseID}`)
    .then((res) => res.json())
    .then((course) => {
        console.log('dispatching...')
        dispatch({
        type: COURSE_INFO_REQUEST,
        payload: course
    })}
    )
    .catch(err => console.log(err))
}   