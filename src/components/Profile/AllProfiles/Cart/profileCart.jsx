import { Link } from 'react-router-dom';
import './profileCart.css';

export function ProfileCart({ profile }) {

    const levelPct = Math.min(profile.level, 100); // opcional

    return (
        <div className="profile-card">

            {/* Background */}
            <div
                className="card-bg"
                style={{ backgroundImage: `url(${profile.background})` }}
            />

            <div className="card-content">

                {/* Avatar */}
                <div className="avatar-wrap">
                    <Link to={`/profile/other/${profile.id}`}>
                        <img
                            className="avatar-img"
                            src={profile.avatar}
                            alt="avatar"
                        />
                    </Link>

                    {/* Frame (solo si existe) */}
                    {profile.frame && (
                        <img
                            className="frame-img"
                            src={profile.frame}
                            alt="frame"
                        />
                    )}
                </div>

                {/* Info */}
                <div className="card-info">

                    <div className="card-header">
                        <span className="nickname">{profile.nickname}</span>

                        {/* Nombre real opcional */}
                        {profile.realName && (
                            <span className="realname">{profile.realName}</span>
                        )}

                        <span className="state-badge">{profile.userState}</span>
                    </div>

                    {/* Meta info */}
                    {(profile.countrie || profile.age || profile.gender) ? (
                        <div className="meta-row">

                            {profile.countrie && (
                                <span className="meta-pill">
                                    🌍 {profile.countrie}
                                </span>
                            )}

                            {profile.age && (
                                <span className="meta-pill">
                                    🎂 {profile.age} años
                                </span>
                            )}

                            {profile.gender && (
                                <span className="meta-pill">
                                    👤 {profile.gender}
                                </span>
                            )}

                        </div>
                    ) : (
                        <p className="no-info">Sin información adicional</p>
                    )}

                    {/* Nivel */}
                    <div className="level-section">
                        <div className="level-header">
                            <span>Nivel</span>
                            <span>{profile.level}</span>
                        </div>

                        <div className="level-bar-bg">
                            <div
                                className="level-bar-fill"
                                style={{ width: `${levelPct}%` }}
                            />
                        </div>
                    </div>

                    {/* Descripción */}
                    {profile.description && (
                        <p className="description">{profile.description}</p>
                    )}

                </div>
            </div>

            <div className="card-footer-line" />
        </div>
    );
}