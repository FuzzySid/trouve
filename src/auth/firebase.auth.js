import { authactionTypes } from '../context/usercontext/authreducer';
import {auth, provider} from '../firebase.config';

export const googleRedirect=()=>{
    auth.signInWithRedirect(provider)
}

export const authenticateWithGoogle=async(dispatch)=>{
        auth.getRedirectResult()
        .then(result=>{
            dispatch({
                type: authactionTypes.SET_USER,
                user: result.user
            })
            
        })
        .catch(err=>{
            console.log(err.message)
        })    
}
export const googleAuthPopup=async(dispatch)=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type: authactionTypes.SET_USER,
                user: result.user
            })
            
        })
        .catch(err=>{
            console.log(err.message)
        })    
}



export const logout=(dispatch)=>{
    auth.signOut()
        .then(()=>{
            dispatch({
                type:authactionTypes.LOG_OUT,
            })
        })
        .catch(err=>{
            console.log('error with signout')
        })
}