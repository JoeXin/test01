import { GET_DATA } from '../action/action'
const defaultState = {
   list: [1, 2, 3, 4, 5]
}
export default (state = defaultState, action) => {
   switch (action.key) {
      case 'GET_DATA':
         return {
            ...state,
            list: state.list
         }
      default:
         return state
   }
}