export const authinitialState={
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
};

export const authactionTypes={
    SET_USER: "SET_USER",
    LOG_OUT: "LOG_OUT"
}

const authreducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case authactionTypes.SET_USER: 
            localStorage.setItem('user',JSON.stringify(action.user))
            return{
                ...state,
                user:action.user
            }
        case authactionTypes.LOG_OUT:
            localStorage.clear();
            return{
                ...state,
                user:null
            }
        default: return state
    }
}

export default authreducer;