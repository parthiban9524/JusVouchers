import api from "./api";


export function submitSignup(data) {
    console.log("data", data)
    return dispatch => {
        dispatch({
            type: "SIGNUP",
            payload: api.post('/user/userRegister', data),
            meta: { data: "signup" },
        })
    };
}

export function submitLogin(data) {
    return dispatch => {
        dispatch({
            type: "LOGIN",
            payload: api.post('/user/login', data),
            meta: { data: "login" }
        });
    };
}

export function submitEmail(data) {
    console.log("data", data)
    return dispatch => {
        dispatch({
            type: "EMAIL",
            payload: api.post('/user/emailSend', data),
            meta: { data: "email" },
        })
    };
}

export function submitOTP(data) {
    return dispatch => {
        dispatch({
            type: "OTP",
            payload: api.post('/user/loginOtpSend', data),
            meta: { data: "otp" },
        })
    };
}

export function submitPassword(data) {
    return dispatch => {
        dispatch({
            type: "PASSWORD",
            payload: api.put('/user/changePassword', data),
            meta: { data: "password" },
        })
    };
}

export function submitVoucher(data) {
    return dispatch => {
        dispatch({
            type: "ADD_VOUCHER",
            payload: api.post('/voucher/addVouchers', data),
        })
    };
}



