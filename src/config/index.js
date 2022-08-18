import Config from "react-native-config";
const config = { api: {
        host: Config.BASE_URL,
        timeout: 20000,
    }
};
export const API_HOST = config.api.host + '/api/user';
export const API = config.api.host;
export default config

export const BACKEND_URL = "http://192.168.1.38:8001/"
export const BACKEND_API =  BACKEND_API + "api/";

