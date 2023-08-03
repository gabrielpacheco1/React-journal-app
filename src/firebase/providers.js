import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider= new GoogleAuthProvider()

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials= GoogleAuthProvider.credentialFromResult(result)

        const {displayName, email, photoURL, uid}= result.user
        // console.log(photoURL)
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }
}

export const signInWithEmailPassword = async(email, password) => { 

    try {
        const result= await signInWithEmailAndPassword(FirebaseAuth, email, password) 
        // console.log({result})
        const {displayName, email: emailResult, photoURL, uid}= result.user
        return {
            ok: true,
            displayName,
            email: emailResult,
            photoURL,
            uid
        }
        
    } catch (error) {
        // const errorMessage = error.message;
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {

    try {
        
        const resp= await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL}= resp.user
        // console.log(resp)

        //actualizar el displayName de firebase
        await updateProfile(FirebaseAuth.currentUser, {displayName})

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}   