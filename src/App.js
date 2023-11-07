import { Navbar } from "./components/Navbar"
import { AppRoutes } from "./AppRoutes"
import { BrowserRouter } from "react-router-dom"

export const App = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <AppRoutes/>
        </BrowserRouter>
            
        
    )
};