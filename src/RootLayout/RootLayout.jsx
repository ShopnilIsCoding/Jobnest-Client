import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";




const RootLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className="container mx-auto">
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
        
    );
};

export default RootLayout;