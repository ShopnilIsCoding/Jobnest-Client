
import AllTabs from '../Components/AllTabs';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import SponsorsSection from '../Components/SponsorsSection';
import WhyUS from '../Components/WhyUs';

const Home = () => {
    
    
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <AllTabs ></AllTabs>
            <SponsorsSection></SponsorsSection>
            <WhyUS></WhyUS>
            <hr className=" mx-auto border-dashed mt-3 lg:mt-6 border-accent border-2" />
            <Footer></Footer>
        </div>
    );
};

export default Home;