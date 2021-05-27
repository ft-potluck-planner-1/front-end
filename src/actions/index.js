export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const GUEST_POTLUCK = 'GUEST_POTLUCKS';
export const ORGANIZER_POTLUCK = 'ORGANIZER_POTLUCK';


export const getLoginResponse = (res) => {
    return({type: LOGIN_RESPONSE, payload: res});
}

export const editPotluck = (potluck) => {
    return({type: GUEST_POTLUCK, payload: potluck})
}

export const organizerPotluck = (potluck) => {
    return({type: ORGANIZER_POTLUCK, payload: potluck});
}