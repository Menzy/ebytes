import { auth } from "./Firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";



// Auth component
const Auth = () => {

    useEffect(() => {
        var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

        const uiConfig = {
            signInOptions: [
                EmailAuthProvider.PROVIDER_ID,
                GoogleAuthProvider.PROVIDER_ID,
            ],
            // Other config options...
            signInSuccessUrl: '/home',

        };
        ui.start('#firebaseui-auth-container', uiConfig);
    }, []);

    return (
        <div className="auth-container">
            <div className="card">
                <div className="text-wrapper">Welcome Back</div>
                <div id="firebaseui-auth-container" className="logbut">
                </div>
                <div className="div">New here? Create account</div>
                <div className="text-wrapper-2">Forgot your password?</div>
            </div>
        </div>
    );
}

export default Auth;