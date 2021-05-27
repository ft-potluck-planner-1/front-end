export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const GUEST_POTLUCK = 'GUEST_POTLUCKS';


export const getLoginResponse = (res) => {
    return({type: LOGIN_RESPONSE, payload: res});
}

export const editPotluck = (potluck) => {
    return({type: GUEST_POTLUCK, payload: potluck})
}

