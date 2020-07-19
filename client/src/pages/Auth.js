import React, { useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

function Auth(props) {
    const { user, loginUser, signupUser } = props;
    const initialFormState = { email: "", password: "" };
    const [formObject, setFormObject] = useState(initialFormState)

    const location = useLocation();

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const { email, password } = formObject;
        loginUser(email, password);
        setFormObject(initialFormState);
    }

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        const { email, password, firstName, lastName } = formObject;
        signupUser(email, password, firstName, lastName);
        setFormObject(initialFormState);
    }

    return (
        <>
            {user.email ?
                <Redirect to="/home" />
                :
                location.pathname === "/login" ?
                    <>
                        <LoginForm
                            formObject={formObject}
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleLoginSubmit} />

                    </>
                    :
                    <>
                        <SignupForm
                            formObject={formObject}
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleSignupSubmit} />
                    </>
            }
        </>
    )
}

export default Auth;