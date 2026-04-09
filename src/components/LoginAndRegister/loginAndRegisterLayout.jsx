import "./loginAndRegisterLayout.css";

export function LoginAndRegisterLayout({ children }) {
    return (
        <div className="auth-layout">
            <video autoPlay muted loop className="auth-bg-video">
                <source src="./public/98511-649310767.mp4" type="video/mp4" />
            </video>
            <div className="auth-overlay" />
            <div className="auth-body">{children}</div>
        </div>
    );
}