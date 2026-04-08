import { useRef, useState, useEffect } from "react";
import './myProfileLayout.css'

export function MyProfileLayout({profile}){

    return (
        <div>
            <div
                className="bg-image"
                style={{ backgroundImage: `url(${profile.background})` }}
            ></div>
            <div className="bg-fade"></div>

            <div className="profile-container">
                <div className="total-block">

                    <div className="profile-header">
                        <div className="avatar">
                            <img className="avatar-img" src={profile.avatar} alt="avatar" />
                            <img className="marco-img" src={profile.frame} alt="frame" />
                        </div>

                        <div className="user-info">
                            <h1>{profile.nickname}</h1>
                            <span className="user-sub">{profile.realName}</span>
                            <div className="info-row">
                                <span className="status-pill">
                                    <span className="status-dot"></span>
                                    {profile.userState}
                                </span>
                                {profile.countrie && (
                                    <span className="info-pill">🌍 {profile.countrie}</span>
                                )}
                                {profile.age && (
                                    <span className="info-pill">🎂 {profile.age} años</span>
                                )}
                                {profile.gender && (
                                    <span className="info-pill">{profile.gender}</span>
                                )}
                            </div>
                        </div>

                        <div className="level-box">
                            <div className="level-label">Nivel</div>
                            <div className="level-circle">{profile.level}</div>
                        </div>

                        <div className="options">
                            <button className="button-profile">⚙️ Editar Perfil</button>
                            <button className="button-profile">✉ Chats</button>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="section">
                        <h2>Descripción</h2>
                        <div className="description-box">
                            <p>{profile.description}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}