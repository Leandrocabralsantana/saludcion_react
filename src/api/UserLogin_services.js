import axios from '../axiosConfig.js'
export const UserLogin_services = () => ({
 LoginUser: async(userData) => {
    try {
        const response = await axios.post(`/api/auth`, {nickname: userData.nickname, password: userData.password});
        return response.data;
    }
    catch(error) {
        console.log("Error", error)
        throw error;
    }
 }
});