import { ADD_CLIENT } from '../actions/actionTypes';

export default (
    state = {
        client: ""
    },
    action
) => {
    switch(action.type){
        case ADD_CLIENT:
        return {
            ...state,
            client: action.payload
        }
        default: return state;
    }
}
