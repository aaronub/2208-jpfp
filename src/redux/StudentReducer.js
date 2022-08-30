import axios from 'axios';

//action type
const GET_STUDENTS = 'GET_STUDENTS'

//action creator
const getStudents = (students)=> ({
     type:GET_STUDENTS,
     students,
})

//thunk
export const _getStudents = () => {
     return async (dispatch) => {
       const { data } = await axios.get('/api/students');
       dispatch(getStudents(data));
     };
 };


const initState = []
//reducer function
const StudentReducer = (state=initState, action)=>{
     switch (action.type){
          case GET_STUDENTS:
               return action.students;

          default:
               return state
     }
}

export default StudentReducer;