import { LOGIN_RESPONSE, GUEST_POTLUCK, ORGANIZER_POTLUCK } from '../actions/index';

const initialState = {
    message: '',
    token: '',
    user_id: '',
    organizerPotluck: {},
    guestPotluck: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_RESPONSE:
            return {
                ...state, 
                user_id: action.payload.user_id
            };
        case GUEST_POTLUCK:
            return {
                ...state,
                guestPotluck: action.payload
            }
        case ORGANIZER_POTLUCK:
            return {
                ...state,
                organizerPotluck: action.payload
            }
        default:
            return state;
    };
}

export default reducer;