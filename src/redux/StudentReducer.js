import axios from 'axios';

//action type
const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const UPDATE_STUDENT_CAMPUSID = 'UPDATE_STUDENT_CAMPUSID'

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
const updateStudent = (student)=>({
     type:UPDATE_STUDENT,
     student,
})
const updateStudentCampusId = (student)=>({
     type:UPDATE_STUDENT_CAMPUSID,
     student
})

//thunk
export const _getStudents = () => {
     return async (dispatch) => {
       const { data } = await axios.get('/api/students');
       dispatch(getStudents(data.sort((a,b)=>a.id-b.id)));
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
export const _updateStudent = (id, student)=>{
     return async (dispatch)=>{
          const {data} = await axios.put(`/api/students/${id}`, student)
          dispatch(updateStudent(data))
     }
}

export const _updateStudentCampusId = (id, student)=>{
     return async(dispatch)=>{
          const {data} = await axios.put(`/api/students/${id}`, student)
          dispatch(updateStudentCampusId(data))
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

          case UPDATE_STUDENT:
               return action.student

          case UPDATE_STUDENT_CAMPUSID:
               return action.student

          default:
               return state
     }
}

export default StudentReducer;