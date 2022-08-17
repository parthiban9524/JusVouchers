export const LoginData = {
    data: []
}
export const setData = (item) => {
    LoginData.data = item.user;
}
export const resetData = () => {
    LoginData.data = [];
}
