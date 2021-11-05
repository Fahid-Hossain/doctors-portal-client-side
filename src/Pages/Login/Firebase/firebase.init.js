import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseIntialization =()=>{
     initializeApp(firebaseConfig);
}
export default firebaseIntialization;