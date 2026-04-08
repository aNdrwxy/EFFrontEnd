import axios from 'axios'

localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc1NjkyMzU2LCJpYXQiOjE3NzU2ODg3NTYsImp0aSI6ImViOTg0NmJkN2JlMDQzNGNhMzc5NGY4ODEzM2VhNDczIiwidXNlcl9pZCI6IjlhZjZkOTVmLTk5MjItNGVhZS05NDc3LWVhMTA5ZjlhNTc0ZSIsInJvbGUiOiJjdXN0b21lciIsInN0YXR1cyI6ImFjdGl2ZSJ9.HxihMyx80HVYmbd_qcjo7vyllHIX21OC0QjoZ58sRSA')

const auth = () => ({
    headers: {
        Authorization: `Bearer  ${localStorage.getItem('token')}`
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
    return axios.put(`http://127.0.0.1:8000/api/profile/other/${id}/`, profile, auth());
}