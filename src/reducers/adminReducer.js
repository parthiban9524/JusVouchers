import { get } from "lodash";
const defaultState = {
    fetching: false,
    data: {},
    serverError: []
}

export default function adminReducer(state = defaultState, action) {

    switch (action.type) {
        case "ADD_VOUCHER": {
            return {
                ...state,
                fetching: true,
                data: [],
                serverError: {}
            }
        }
        case "ADD_VOUCHER": {
            return {
                ...state,
                fetching: false,
                serverError: {
                    'message': 'request failed try again.'
                }
            }
        }
        case "ADD_VOUCHER": {
            let response = action.payload.data;
            let code = get(response, 'status');
            if (code !== 200) {
                return {
                    ...state,
                    fetching: false,
                    serverError: get(response, 'data')
                }
            }
            let data = get(response, 'data.results');
            return {
                ...state,
                fetching: false,
                data: data,
            }
        }
    }
    return state;

}