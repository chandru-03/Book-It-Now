import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const storedUser = localStorage.getItem('user');
    const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
       
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;

