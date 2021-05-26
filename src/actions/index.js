export const LOGIN_RESPONSE = 'LOGIN-RESPONSE';



export const getLoginResponse = (res) => {
    console.log('res action', res)
    return({type: LOGIN_RESPONSE, payload: res.user_id});
}


