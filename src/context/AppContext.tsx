import React, { createContext, useContext, useState } from 'react';

// Define the user data interface
interface UserData {
  nombre: string;
  ubicacion: string;
  modo: string;
  categoria: string;
  descripcion: string;
  timecoins: number;
}

// Define the context interface
interface AppContextProps {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
  resetUserData: () => void;
}

// Create default user data
const defaultUserData: UserData = {
  nombre: '',
  ubicacion: '',
  modo: '',
  categoria: '',
  descripcion: '',
  timecoins: 0,
};

// Create the context
const AppContext = createContext<AppContextProps>({
  userData: defaultUserData,
  updateUserData: () => {},
  resetUserData: () => {},
});

// Export the hook for using the context
export const useAppContext = () => useContext(AppContext);

// Create the provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  // Function to update user data
  const updateUserData = (data: Partial<UserData>) => {
    setUserData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  // Function to reset user data
  const resetUserData = () => {
    setUserData(defaultUserData);
  };

  return (
    <AppContext.Provider
      value={{
        userData,
        updateUserData,
        resetUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};