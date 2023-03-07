import axios from '../axios';

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}
const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}
const handleCreateNewUser = (data) => {
    return axios.post('/api/create-new-user', data);
}

const deleteUserServices = (userId) => {
    //return axios.delete('/api/delete-user',id);
    return axios.delete('/api/delete-user', {
        data: { id: userId }
    });
}
const editUserDataServices = (inputData) => {
    return axios.put('/api/edit-user', inputData);
}
export {
    handleLoginApi,
    getAllUsers,
    handleCreateNewUser,
    // editUserServices,
    deleteUserServices,
    editUserDataServices
}