import { get } from "lodash";
const defaultState = {
    fetching: false,
    data: {},
    serverError: []
}
export default function setupReducer(state = defaultState, action) {


    let response = get(action, 'payload.data');
    let code = get(response, 'status');

    console.log("code",code)
    console.log("response",response)

    switch (action.type) {
        case "REFCODE_PENDING":
        case "LOGIN_PENDING": {
            return {
                fetching: true,
                data: {},
                serverError: []
            }
        }
        case "SIGNUP_PENDING":
        case "EMAIL_PENDING":
        case "PASSWORD_PENDING":    
        case "OTP_PENDING": {
            return {
                ...state,
                fetching: true,
                data: {},
                serverError: []
            }
        }
        case "SIGNUP_REJECTED":
        case "EMAIL_PENDING":
        case "OTP_REJECTED":
        case "LOGIN_REJECTED":
        case "PASSWORD_REJECTED":  {
            let m = get(action, 'meta.data');
            console.log("m", m)

            return {
                ...state,
                fetching: false,
                serverError: {
                    'message': 'request failed try again.',
                    'meta': m
                }
            }
        }
        case "SIGNUP_FULFILLED":
        case "OTP_FULFILLED":
        case "EMAIL_FULFILLED":
        case "REFCODE_FULFILLED":
        case "PASSWORD_FULFILLED":  {
            console.log("Actiton",action)
            let response = get(action, 'payload.data');
            let code = get(action, 'payload.status');
            let m = get(action, 'meta.data');
            if (code !== 201) {
                console.log("hiiiiiiiiii --- 2")
                return {
                    ...state,
                    fetching: false,
                    serverError: { ...get(response, 'data'), },
                }
            }
            console.log("hiiiiiiiiii --- 3")
            let d = { ...response }
            return {
                ...state,
                fetching: false,
                data: d,
                meta : m,
            }
        }
        case "LOGIN_FULFILLED": {
            let response = get(action, 'payload.data');
            console.log("")
            let code = get(action, 'payload.status');
            let m = get(action, 'meta.data');
            if (code !== 200) {
                console.log("hiiiiiiiiii --- 2")
                return {
                    ...state,
                    fetching: false,
                    serverError: { ...get(response, 'data'), },
                }
            }
            console.log("hiiiiiiiiii --- 3")
            let d = { ...response }
            return {
                ...state,
                fetching: false,
                data: d,
                meta : m,
            }
        }
        case "CLEAR_DATA": {
            return {
                ...state,
                fetching: false,
                serverError: []
            }
        }
    }
    return state;
}
