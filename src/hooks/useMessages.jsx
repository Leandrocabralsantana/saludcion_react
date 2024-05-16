import axios from '../axiosConfig.js'

import { useState, useEffect } from 'react';

export const useMessages = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/message')
      .then(response => {
        setSections(response.data); 
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [setSections]);



  const getAllMessages = async () => {
    try {
      const response = await axios.get('/api/message');
      return response.data;
    } catch (error) {
      console.error("Error fetching meesages:", error);
      throw error;
    }
  };
    
  const createMessage = async (message) => {
    try {
      const response = await axios.post(`/api/message`, message);
      return response;

    } catch (error) {
      setError(error);
    }
  };

  const updateMessage = async (messageId, messageData) => {
    try {
      const response = await axios.put(`/api/message/${messageId}`, messageData);
      return response;


    } catch (error) {
      setError(error);
    }
  };

  const deleteMessage = async (messageId) => {
    try {
      const response = await axios.delete(`/api/message?messageId=${messageId}`);
      return response;
    } catch (error) {
      setError(error);
    }
  };

  return { sections, loading, error, createMessage, updateMessage, deleteMessage, getAllMessages };
};