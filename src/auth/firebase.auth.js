import { authactionTypes } from '../context/usercontext/authreducer';
import {auth, provider} from '../firebase.config';

export const authenticateWithGoogle=(dispatch)=>{
    auth.signInWithPopup(provider)
            .then(result=>{
                console.log(result)
                dispatch({
                    type: authactionTypes.SET_USER,
                    user: result.user
                })
                
            })
            .catch(err=>{
                console.log(err.message)
            })
}