import { useState } from "react";
import "./Login.css";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Username:", username);
        console.log("Password:", password);

        // Spring Boot API here
    };

    return (
        <div className="login-page">

            <div className="login-container">

                <div className="login-box">

                    {/* Icon */}
                    <div className="login-icon">
                        <i className="bi bi-kanban"></i>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleLogin}>

                        {/* Username */}
                        <div className="input-group login-input">
                            <span className="input-group-text">
                                <i className="bi bi-person"></i>
                            </span>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="USERNAME"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        <div className="input-group login-input">
                            <span className="input-group-text">
                                <i className="bi bi-lock"></i>
                            </span>

                            <input
                                type="password"
                                className="form-control"
                                placeholder="PASSWORD"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="btn login-button"
                        >
                            LOGIN
                        </button>

                        <div className="login-links">
                            <a href="/signup">Signup</a>
                            <a href="/forgot-password">Forgot password?</a>
                        </div>


                    </form>

                </div>

            </div>

        </div>
    );
}

export default Login;