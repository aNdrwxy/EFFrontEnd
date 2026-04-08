import {useEffect, useState} from 'react'
import {getMyProfile} from '../../../api/profileAPI'
import {MyProfileLayout} from './myProfileLayout'

export function MyProfile() {
    const [myProfile, setMyProfile] = useState(null);

    useEffect(() => {
        async function loadMyProfile() {
            const res = await getMyProfile();
            setMyProfile(res.data);    
        }
        loadMyProfile();
    }, [])

    if (!myProfile) return <p>Cargando...</p>;

    return (
        <div className="bg-image">
            <MyProfileLayout profile={myProfile} />
        </div>
    )
}