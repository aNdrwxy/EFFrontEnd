import {LoginAndRegisterLayout} from '../components/LoginAndRegister/loginAndRegisterLayout'
import {LoginAndRegister} from '../components/LoginAndRegister/loginAndRegister'


export function LoginAndRegisterPage() {
    return (
        <LoginAndRegisterLayout>
            <div className="bienvenida" style={{ animation: "slideFromLeft 0.8s ease-out" }}>
                <h1>Bienvenido a Steam</h1>
                <p>La mejor plataforma de juegos en línea del mundo</p>
            </div>
            <div style={{ animation: "slideFromRight 0.8s ease-out" }}>
                <LoginAndRegister />
            </div>
        </LoginAndRegisterLayout>
    );
}