import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const inititializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default inititializeAuthentication;