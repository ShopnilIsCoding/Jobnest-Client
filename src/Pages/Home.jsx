
import AllTabs from '../Components/AllTabs';
import Banner from '../Components/Banner';
import SponsorsSection from '../Components/SponsorsSection';

const Home = () => {
    
    
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <AllTabs ></AllTabs>
            <SponsorsSection></SponsorsSection>
        </div>
    );
};

export default Home;