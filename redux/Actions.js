import { FETCH_USERS_DATA, LOGIN_USER_AGE, LOGIN_USER_NAME, LOGIN_USER_PASSWORD } from "./ActionType";

export const loginUserNameAction = name => ({
    type : LOGIN_USER_NAME,
    payload : name
});

export const loginUserPasswordAction = password => dispatch =>{
    dispatch({
        type : LOGIN_USER_PASSWORD,
        payload : password
    });
};

export const loginUserAgeAction = age => {
    return{
    type : LOGIN_USER_AGE,
    payload : age
    }
}


export const FetchUsersData = () =>{
    try{
return async dispatch => {
 const result = await fetch('https://jsonplaceholder.typicode.com/users',{
     method : 'GET',
     headers : {
         'content-Type' : 'application/json',
     }
 });
 const json = await result.json();
  if(json){
   dispatch({
       type : FETCH_USERS_DATA,
       payload : json
   })
  }else{
      console.log('unable to fetch')
  }

}
    } catch(error) {
      console.log(error)
    }
}