import {useEffect, useState} from "react";
import { getAllProfiles } from "../../../api/profileAPI";
import { ProfileCart } from './Cart/profileCart'

export function ProfileList(){

    const [profiles, setProfiles]= useState([]);


    useEffect(() =>{
        async function LoadProfiles() {
            const res =  await getAllProfiles();
            setProfiles(res.data);
        }

        LoadProfiles();
    },[])

    return <div className="cardsGrid">
        {profiles.map(profile => (
            <ProfileCart key={profile.id} profile={profile}/>
        ))}
    </div>;
}