import api from "./api";


export function submitSignup(data) {
    console.log("data", data)
    return dispatch => {
        dispatch({
            type: "SIGNUP",
            payload: api.post('/userRegister', data),
            meta: { data: "signup" },
        })
    };
}

