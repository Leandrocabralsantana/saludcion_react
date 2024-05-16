import axios from '../axiosConfig.js'

import { useState } from 'react';

export const useInternalNumbers = () => {

  const getAllInternalNumbers = async () => {
    try {
      const response = await axios.get('/api/internalnumber');
      return response.data;
    } catch (error) {
      console.error("Error fetching meesages:", error);
      throw error;
    }
  };
  const getFloorDescription = (floor) => {
    switch (floor) {
      case -1:
        return "Subsuelo";
      case 0:
        return "Planta Baja";
      default:
        return floor === 1 ? "1er Piso" :
               floor === 2 ? "2do Piso" :
               `${floor}° Piso`;
    }
  };

  return { getAllInternalNumbers, getFloorDescription};
};