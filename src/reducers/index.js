import {LOGIN_RESPONSE} from '../actions/index';


const initialState = {
    message: '',
    token: '',
    user_id: '',
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN_RESPONSE:
            return{
                ...state, 
                user_id: action.payload
            }
        default:
            return state;
    }

}

export default reducer;