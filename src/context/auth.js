import React , {createContext,useReducer} from 'react'
import jwtDecode from 'jwt-decode'
if(localStorage.getItem('jwttoken')){
   const decodeToken = jwtDecode(localStorage.getItem('jwttoken'))

   if(decodeToken.exp * 1000 < Date.now()){
       localStorage.removeItem('jwttoken')
   }
}

const AuthContext = createContext({
    user:null,
    login:(data)=>{}
})
 
const authReducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                user:action.payload
            }
        case 'LOGOUT':
            return{
                ...state, 
                user:null
            }   
        default:
            return state
    }
}

const AuthProvider = (props) => {
    const [state,dispatch] =useReducer(authReducer,{user:null})
    const login = (data)=>{
        localStorage.setItem('jwttoken',data.token)
        dispatch({
            type:"LOGIN",
            payload:data
        })
    }
    const logout = ()=>{
        localStorage.removeItem('jwttoken')
        dispatch({type:"LOGOUT"})
    }
  return (
   <AuthContext.Provider value={{user:state.user,logout,login}} {...props}/>
     
 
  )
}
export {AuthContext,AuthProvider}