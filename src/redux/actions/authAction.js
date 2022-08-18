import axiosInstance from "../../utils/axiosInstance";


export const signupUserAction = (crediential,navigation) => dispatch => {
    axiosInstance.post('user/userRegister', crediential).then((result) => {
      try {
        console.log(result);
      } 
      catch (error) {
        alert(error.toString());
      } 
    }).then(()=>{

    }).catch(err => {
      alert(err.toString());
  
    })
  }
