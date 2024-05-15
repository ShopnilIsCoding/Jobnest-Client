import { motion } from "framer-motion";
import AllTabs from '../Components/AllTabs';
import Banner from '../Components/Banner';
import SponsorsSection from '../Components/SponsorsSection';
import WhyUS from '../Components/WhyUs';

const Home = () => {
    return (
        <motion.div 
            className='container mx-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div 
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Banner />
            </motion.div>
            <motion.div 
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <AllTabs />
            </motion.div>
            <motion.div 
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <SponsorsSection />
            </motion.div>
            <motion.div 
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <WhyUS />
            </motion.div>
            <motion.hr 
                className="mx-auto border-dashed mt-3 lg:mt-6 border-accent border-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            />
           
        </motion.div>
    );
};

export default Home;
