import axios from "axios";

const VITE_REACT_APP_API_URL = "https:localhost:7011";

const KeyStorage_services = {
  getAllKeys: async () => {
    try {
      const response = await axios.get(`${VITE_REACT_APP_API_URL}/api/Key`);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
};

export default KeyStorage_services;