import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section id="login-page" className="auth">
            <form id="login">
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Sokka@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" />
                    <input
                        type="submit"
                        className="btn submit"
                        // defaultValue="Login"
                        value="Login"
                    />
                    <p className="field">
                        <span>
                            If you don't have profile click{" "}
                            <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
