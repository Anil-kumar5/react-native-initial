import { FETCH_USERS_DATA, LOGIN_USER_AGE, LOGIN_USER_NAME, LOGIN_USER_PASSWORD } from "./ActionType";

const initialState = {
    name:'',
    password :'',
    age :0,
    data : []
}
export default function loginReducer(state = initialState,action){
    switch(action.type){
        case LOGIN_USER_NAME : return {
            ...state,
            name : action.payload
        }
        case LOGIN_USER_PASSWORD : return{
            ...state,
            password : action.payload
        }
        case LOGIN_USER_AGE : return{
            ...state,
            age : action.payload
        }
        case FETCH_USERS_DATA : return{
            ...state,
            data : action.payload
        }
        default : return state
    };
};