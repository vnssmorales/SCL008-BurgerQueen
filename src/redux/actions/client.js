import { ADD_CLIENT } from './actionTypes';

export const clientName = distpatch => (client) => {
    distpatch({
        type: ADD_CLIENT,
        payload: client,
    })

}
