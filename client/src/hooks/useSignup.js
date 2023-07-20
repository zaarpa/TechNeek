import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error,setError] = useState(null);
    const [loading,setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async (email,password) =>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        })
        const data = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setError(data.message);
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(data));
            dispatch({type:'LOGIN',payload:data});
            setIsLoading(false);
            
        }
    }
    return {signup,error,loading}
}