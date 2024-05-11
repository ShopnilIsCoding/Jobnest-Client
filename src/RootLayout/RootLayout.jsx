import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";




const RootLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className="container mx-auto">
            <Outlet></Outlet>
           </div>
        </div>
        
    );
};

export default RootLayout;