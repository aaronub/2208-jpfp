import axios from 'axios';

//action type
const GET_CAMPUSES = 'GET_CAMPUSES'

//action creator
const getCampuses = (campuses)=> ({
     type:GET_CAMPUSES,
     campuses,
})

//thunk
export const _getCampuses = () => {
     return async (dispatch) => {
       const { data } = await axios.get('/api/campuses');
       dispatch(getCampuses(data));
     };
 };


const initState = []
//reducer function
const CampusReducer = (state=initState, action)=>{
     switch (action.type){
          case GET_CAMPUSES:
               return action.campuses;

          default:
               return state
     }
}

export default CampusReducer;