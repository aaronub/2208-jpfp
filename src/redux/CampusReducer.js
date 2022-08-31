import axios from 'axios';

//action type
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET-CAMPUS'

//action creator
const getCampuses = (campuses)=> ({
     type:GET_CAMPUSES,
     campuses,
})
const getCampus = (campus) => ({
     type: GET_CAMPUS,
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

const initState = []
//reducer function
const CampusReducer = (state=initState, action)=>{
     switch (action.type){
          case GET_CAMPUSES:
               return action.campuses;

          case GET_CAMPUS:
               return action.campus

          default:
               return state
     }
}

export default CampusReducer;