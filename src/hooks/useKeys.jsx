import {useState, useEffect, useContext} from 'react'
import KeyStorage_services from '../api/KeyStorage_services';
export const useKeys = () => {
    KeyStorage_services.getAllKeys();
  return (
    <div></div>
  )
}
