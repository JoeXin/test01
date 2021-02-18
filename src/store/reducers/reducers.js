import { GET_DATA, ADD, SQUARE } from '../actions/actionType'
const defaultState = {
   list: [1, 2, 3, 4, 5]
}
function counter(state = defaultState, action) {
   switch (action.key) {
      case GET_DATA:
         return {
            ...state,
            list: state.list
         }
      case ADD:
         return state + action.num
      case SQUARE:
         return state * state
      case 'PRODUCT_LOADED':
         return { ...state }
      case 'FETCH_USER_SUCCESS':
         return action.user
      default:
         return state
   }
}
export default counter