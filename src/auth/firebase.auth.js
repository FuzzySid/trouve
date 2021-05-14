import {auth} from '../firebase.config';

export const authenticateWithGoogle=(dispatch)=>{
    auth.signInWithPopup(provider)
            .then(result=>{
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
                
            })
            .catch(err=>{
                alert(err.message)
            })
}