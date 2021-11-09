import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword , signOut, onAuthStateChanged,updateProfile  } from "firebase/auth";
import firebaseIntialization from '../Pages/Login/Firebase/firebase.init';

//initialize firebase app
firebaseIntialization();

const useFirebase = () => {
    //useStates
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    //providers
    const googleProvider = new GoogleAuthProvider();
    //auth
    const auth = getAuth();


    //google Sign In
    const signInWithGoogle = (location,history) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                //save or update user info
                saveUser(user.displayName,user.email,"PUT");
                const destination = location?.state?.from || "/"
                history.replace(destination);
                setError("");
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setError(errorMessage);
                setUser("");

            });
    }

    // Register user with email and password
    const RegisterUserWithEmailAndPass = (name,email, password,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                // const user = result.user;
                // setUser(user);
                setError("");
                ///update name on profile
                const newUser = {displayName: name , email}
                setUser(newUser);
                //save user info
                saveUser(name,email,"POST");
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                
                  //redirect 
                history.replace("/");
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                setUser("");
                // ..
            })
            .finally(()=>setIsLoading(false));
    }

    //SignIn user with email and password
    const LoginUserWithEmailAndPass = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
                //redirect to wanna go page from login page
                const destination = location?.state?.from || "/";
                history.replace(destination);
                setError("");
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                setUser("");
            })
            .finally(()=>setIsLoading(false));

    }

    // Observe current user state
    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                // User is signed out
                setUser({})
            }
            setIsLoading(false);
        });
        return ()=> unsubscribed;
    }, [])

    //signOut
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setError("");
        }).catch((error) => {
            // An error happened.
            setError(error.message)
            setUser("");
        })
        .finally(()=>setIsLoading(false))
    }

    //save user info
    const saveUser=(displayName,email,method)=>{
        const user={displayName,email};
        fetch("http://localhost:5000/users",{
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }



    return {
        user,
        error,
        signInWithGoogle,
        RegisterUserWithEmailAndPass,
        LoginUserWithEmailAndPass,
        logOut,
        isLoading
    }
};

export default useFirebase;