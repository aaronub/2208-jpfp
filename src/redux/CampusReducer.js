import axios from 'axios';

//action type
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET-CAMPUS'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'

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

//thunk
export const _getCampuses = () => {
     return async (dispatch) => {
       const { data } = await axios.get('/api/campuses');
       dispatch(getCampuses(data));
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

          default:
               return state
     }
}

export default CampusReducer;