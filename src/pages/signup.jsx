import { useState } from "react";
import "./signup.css";

function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Password:", password);

        // Later we will connect this to Spring Boot
    };

    return (
        <div className="signup-page">

            <div className="signup-container">

                <div className="signup-box">

                    <h2 className="signup-title">
                        Create Account
                    </h2>

                    <form onSubmit={handleSignup}>

                        {/* First Name */}
                        <label>First Name</label>

                        <div className="input-group signup-input">
                            <span className="input-group-text">
                                <i className="bi bi-person"></i>
                            </span>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="FIRST NAME"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>


                        {/* Last Name */}
                        <label>Last Name</label>

                        <div className="input-group signup-input">
                            <span className="input-group-text">
                                <i className="bi bi-person-vcard"></i>
                            </span>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="LAST NAME"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>


                        {/* Email */}
                        <label>Email</label>

                        <div className="input-group signup-input">
                            <span className="input-group-text">
                                <i className="bi bi-envelope"></i>
                            </span>

                            <input
                                type="email"
                                className="form-control"
                                placeholder="EMAIL"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>


                        {/* Password */}
                        <label>Password</label>

                        <div className="input-group signup-input">
                            <span className="input-group-text">
                                <i className="bi bi-key"></i>
                            </span>

                            <input
                                type="password"
                                className="form-control"
                                placeholder="PASSWORD"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>


                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="btn signup-button"
                        >
                            SIGN UP
                        </button>


                        {/* Login Link */}
                        <div className="signin-link">
                            Already have an account?

                            <a href="/">
                                Sign in
                            </a>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Signup;