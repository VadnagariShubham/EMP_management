import React, { createContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const Authcontext = createContext();

const Authprovider = ({children}) => {

  // localStorage.clear();

    const [userData, setUserData] = useState(null)
    
    useEffect(() => {
      setLocalStorage();
      const {employees} = getLocalStorage();
    setUserData(employees)
    }, [])
    
    

  return (
    <div>
        <Authcontext.Provider value={[userData,setUserData]}>

            {children}
            </Authcontext.Provider>
    </div>
  )
}

export default Authprovider