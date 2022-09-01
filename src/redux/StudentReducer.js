import axios from 'axios';

//action type
const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

//action creator
const getStudents = (students) => ({
     type:GET_STUDENTS,
     students,
})
const getStudent = (student) => ({
     type:GET_STUDENT,
     student,
})
const createStudent = (student)=>({
     type:CREATE_STUDENT,
     student,
})
const deleteStudent = (student)=>({
     type:DELETE_STUDENT,
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
          dispatch(getStudent(data))
     }
}
export const _createStudent = (student)=>{
     return async (dispatch)=>{
          const {data} = await axios.post('/api/students', student);
          dispatch(createStudent(data))
     }
}
export const _deleteStudent = (id)=>{
     return async (dispatch)=>{
          const {data} = await axios.delete(`/api/students/${id}`)
          dispatch(deleteStudent(data))
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

          case CREATE_STUDENT:
               return [...state, action.student]

          case DELETE_STUDENT:
               const newStudents = state.filter(itm=> itm.id !== action.student.id)
               return [...newStudents]

          default:
               return state
     }
}

export default StudentReducer;