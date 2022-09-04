import axios from 'axios';

//action type
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET-CAMPUS'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
// const UPDATE_STUDENT = 'UPDATE_STUDENT'

//action creator
const getCampuses = (campuses)=>({
     type:GET_CAMPUSES,
     campuses,
})
const getCampus = (campus)=>({
     type: GET_CAMPUS,
     campus,
})
const createCampus = (campus)=>({
     type: CREATE_CAMPUS,
     campus
})
const deleteCampus = (campus)=>({
     type: DELETE_CAMPUS,
     campus,
})
const updateCampus = (campus)=>({
     type:UPDATE_CAMPUS,
     campus
})
// const updateStudent = (campus, studentId)=>({
//      type: UPDATE_STUDENT,
//      campus,
//      studentId,
// })

//thunk
export const _getCampuses = (num) => {
     return async (dispatch) => {
       if (!num) {
          const { data } = await axios.get('/api/campuses');
          dispatch(getCampuses(data.sort((a, b)=> a.id - b.id)));
       } else if (num === 1){
          const {data} = await axios.get('/api/campuses?page=1')
          
       }

     };
 };


export const _getCampus = (id) => {
     return async (dispatch) => {
          const {data} = await axios.get(`/api/campuses/${id}`);
          dispatch(getCampus(data))
     }
}
export const _createCampus = (campus)=>{
     return async (dispatch)=>{
          const {data} = await axios.post('/api/campuses', campus)
          dispatch(createCampus(data))
     }
}
export const _deleteCampus = (id)=>{
     return async (dispatch)=>{
          const {data} = await axios.delete(`/api/campuses/${id}`)
          dispatch(deleteCampus(data))
     }
}
export const _updateCampus = (id, campus)=>{
     return async (disptch)=>{
          const {data} = await axios.put(`/api/campuses/${id}`, campus)
          disptch(updateCampus(data))
     }
}
// export const _updateStudent = (id, studentId)=>{
//      return async (dispatch)=>{
//           const {data} = await axios.get(`/api/campuses/${id}`)
//           dispatch(updateStudent(data, studentId))
//      }
// }

const initState = []
//reducer function
const CampusReducer = (state=initState, action)=>{
     switch (action.type){
          case GET_CAMPUSES:
               return action.campuses;

          case GET_CAMPUS:
               return action.campus

          case CREATE_CAMPUS:
               return [...state, action.campus];
          
          case DELETE_CAMPUS:
               const newCampuses = state.filter(itm=> itm.id !== action.campus.id);
               return [...newCampuses]

          case UPDATE_CAMPUS:
               return action.campus

          // case UPDATE_STUDENT:
          //      const newStudents = state.students.filter(itm=>
          //           itm.id !== action.studentId)
          //      return {...state, students:[...newStudents]}

          default:
               return state
     }
}

export default CampusReducer;