import axios from 'axios'

const auth = () => ({
    headers: {
        Authorization: `Bearer  ${localStorage.getItem('access')}`
    }
});

export const getMyProfile = () => {
    return axios.get(`http://127.0.0.1:8000/api/profile/me/`, auth());
}

export const getOtherProfile = (id) => {
    return axios.get(`http://127.0.0.1:8000/api/profile/other/${id}/`);
}

export const getAllProfiles = () => {
    return axios.get(`http://127.0.0.1:8000/api/profile/all/`);
}

export const updateMyProfile = (profile) => {
    return axios.patch(`http://127.0.0.1:8000/api/profile/update/`, profile, auth());
}