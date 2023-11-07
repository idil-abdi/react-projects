import { createContext, useContext } from "react"

const AppConext = createContext()

export const AppProvider = ( {children} ) => {
    const value = {};

    return (
        <AppConext.Provider value={value}>
            {children}
        </AppConext.Provider>
    )
};

export const useApp = () => useContext(AppConext)
