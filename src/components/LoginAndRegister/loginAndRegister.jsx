import { useState } from "react";
import axios from "axios";
import "./loginAndRegisterLayout.css";

export function LoginAndRegister() {
    const [isActive, setIsActive] = useState(false);

    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    });

    const [loginError, setLoginError] = useState("");
    const [registerError, setRegisterError] = useState("");
    const [registerSuccess, setRegisterSuccess] = useState("");

    const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
        const { data } = await axios.post('http://127.0.0.1:8000/api/login/', {
        username: loginData.username,
        password: loginData.password,
        });
        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("access", data.access);
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("role", data.role);
        localStorage.setItem("status", data.status);
        window.dispatchEvent(new Event("storage"));
    } catch (err) {
        setLoginError(err.response?.data?.detail || "Credenciales incorrectas");
    }
    };

    const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError("");
    setRegisterSuccess("");
    try {
        await axios.post('http://127.0.0.1:8000/api/register/', {
        username: registerData.username,
        email: registerData.email,
        password: registerData.password,
        });
        setRegisterSuccess("¡Cuenta creada! Ya puedes iniciar sesión.");
        setIsActive(false);
    } catch (err) {
        setRegisterError(
        err.response?.data?.detail || "Error al crear la cuenta",
        );
    }
    };

    return (
    <div className={`auth-container ${isActive ? "active" : ""}`}>
      {/* Sign Up */}
        <div className="form-container sign-up">
            <form onSubmit={handleRegister}>
                <h1 className="color-dark">Crea tu cuenta</h1>
                <span>Regístrate con tu correo electrónico</span>
                <input type="text" placeholder="Usuario" value={registerData.username} onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })} required/>
                <input type="email" placeholder="Ingresa tu correo electrónico" value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} required/>
                <input type="password" placeholder="Ingresa tu contraseña" value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} required/>
                {registerError && <p className="error-msg">{registerError}</p>}
                {registerSuccess && <p className="success-msg">{registerSuccess}</p>}
                <button type="submit">Crear</button>
            </form>
        </div>

      {/* Sign In */}
        <div className="form-container sign-in">
            <form onSubmit={handleLogin}>
                <h1 className="color-dark">Iniciar sesión</h1>
                <span>Ingresa tu correo y contraseña</span>
                <input type="text" placeholder="Usuario" value={loginData.username} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} required/>
                <input type="password" placeholder="Ingresa tu contraseña" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} required/>
                <a href="#">Olvidaste tu contraseña</a>
                {loginError && <p className="error-msg">{loginError}</p>}
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>

      {/* Toggle panel */}
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>¿Ya tienes una cuenta?</h1>
                    <p>Ingresa con tu correo y contraseña</p>
                    <button className="hidden" onClick={() => setIsActive(false)}>
                    Iniciar sesión
                    </button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>¿Tu primera vez en Steam?</h1>
                    <p>Es gratis y muy fácil. Descubre miles de juegos para jugar con millones de amigos nuevos.</p>
                    <button className="hidden" onClick={() => setIsActive(true)}>
                    Crea una cuenta
                    </button>
                </div>
            </div>
        </div>
    </div>);
}
