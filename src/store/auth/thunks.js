import { logoutFirebase, registerUserWithEmailPassword, signInWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { login, logout, checkingCredentials } from "./authSlice"

export const checkingAuthentication = (email, password) => {

    return async (dispatch) => {

        dispatch(checkingCredentials())

    }
}


export const startEmailPasswordSignIn = (email, password) => { 

    return async (dispatch) => {

        dispatch(checkingCredentials())

        const result= await signInWithEmailPassword(email, password) 
        // console.log({result})

        if (!result.ok) 
            return dispatch(logout(result))
        // delete result.ok //para borrar la prop 'ok' de result
        dispatch(login(result))
    }
}


export const startGoogleSignIn = () => {

    return async (dispatch) => {

        dispatch(checkingCredentials())

        const result= await signInWithGoogle()
        // console.log({result})

        if (!result.ok) 
            return dispatch(logout(result.errorMessage))
        // delete result.ok //para borrar la prop 'ok' de result
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async(dispatch) => {

        dispatch(checkingCredentials())

        const {ok, uid, photoURL, errorMessage}= await registerUserWithEmailPassword({email, password, displayName})
        // console.log(resp)
        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({uid, displayName, email, photoURL}))
    }
}

export const startLogout = () => {
    return async (dispatch) => {

        //TODO: try catch para una mejor evaluación
        await logoutFirebase()

        dispatch(logout())
    
    }
}