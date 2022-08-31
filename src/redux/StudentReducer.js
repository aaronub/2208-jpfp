import axios from 'axios';

//action type
const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'

//action creator
const getStudents = (students) => ({
     type:GET_STUDENTS,
     students,
})
const getStudent = (student) => ({
     type:GET_STUDENT,
     student,
})

//thunk
export const _getStudents = () => {
     return async (dispatch) => {
       const { data } = await axios.get('/api/students');
       dispatch(getStudents(data));
     };
 };
export const _getStudent = (id) => {
     return async (dispatch) => {
          const {data} = await axios.get(`/api/students/${id}`)
          console.log('data:', data)
          dispatch(getStudent(data))
     }
}


const initState = []
//reducer function
const StudentReducer = (state=initState, action)=>{
     switch (action.type){
          case GET_STUDENTS:
               return action.students;

          case GET_STUDENT:
               return action.student;

          default:
               return state
     }
}

export default StudentReducer;