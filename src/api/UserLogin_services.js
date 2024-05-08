import axios from 'axios'

const VITE_REACT_APP_API_URL = "https:localhost:7011";

export const UserLogin_services = () => ({
 LoginUser: async(userData) => {
    try {
        const response = await axios.post(`${VITE_REACT_APP_API_URL}/api/auth`, {nickname: userData.nickname, password: userData.password});
        return response.data;
    }
    catch(error) {
        console.log("Error", error)
        throw error;
    }
 }
});