import { Navbar } from "./components/Navbar"
import { AppRoutes } from "./AppRoutes"
import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./context/AppProvider";

export const App = () => {
    return(
        <AppProvider>
            <BrowserRouter>
                <Navbar/>
                <AppRoutes/>
            </BrowserRouter>
        </AppProvider>
        
        
    )
};