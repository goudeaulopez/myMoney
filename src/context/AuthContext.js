import * as SecureStore from "expo-secure-store"
import createDataContext from "./createDataContext"
import { navigate } from "../navigationRef"

const authReducer = ( state, action ) => {
    switch(action.type){
                case 'signout':
                    return {token:null, errorMessage:""}
                      case 'signin':
                        return {token: action.payload, errorMessage:""}
                          case 'add_error':
                            return {...state, errorMessage: action.payload}
                              case 'clear_error_message':
                                return {...state,errorMessageEmail:action.payload,errorMessagePassword:action.payload,errorMessage: action.payload}
                                  case 'add_error_email':
                                    return {...state, errorMessageEmail: action.payload}
                                      case 'add_error_password':
                                        return {...state, errorMessagePassword: action.payload}
                              default:
                                return state
    }
}
//errorMessage:action.payload
const myErrorsEmail = (dispatch) => error => {
  dispatch({type:'add_error_email', payload:error})
}
const myErrorsPassword = (dispatch) => error => {
  dispatch({type:'add_error_password', payload:error})
}

const clearErrorMessage = (dispatch) => () => {
   dispatch({type:'clear_error_message', payload:""})
};

const myErrors = (dispatch) => async (error) => {
    dispatch({type:'add_error', payload:error})
}

const signInApp = (dispatch) => async () => {
     const token  = await SecureStore.getItemAsync('token')
        dispatch({type:'signin',payload: token})
        navigate("mainFlow")
    }

const tryLocalSignIn = (dispatch) => async () => {
    const token  = await SecureStore.getItemAsync('token')
    if(token){
        dispatch({type: "signin", payload: token })
        navigate("mainFlow")
    }else{
        navigate("loginFlow")
    }
}
const signOut = (dispatch) => async () => {
   await SecureStore.deleteItemAsync('token')
   dispatch({type: "signout"})
   navigate("loginFlow")
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {tryLocalSignIn,signOut,signInApp,myErrors,clearErrorMessage,myErrorsEmail,myErrorsPassword},
    {token:null}
)

