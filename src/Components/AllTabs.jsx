import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AllTabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    

    return (
        <div className='mt-3 lg:mt-6'>
            <Tabs >
                <TabList>
                    <Tab selectedClassName='bg-accent'>All Jobs</Tab>
                    <Tab selectedClassName='bg-accent'>Onsite Jobs</Tab>
                    <Tab selectedClassName='bg-accent'>Remote Jobs</Tab>
                    <Tab selectedClassName='bg-accent'>Hybrid Jobs</Tab>
                    <Tab selectedClassName='bg-accent'>Part-time Jobs</Tab>
                </TabList>
                <TabPanel>all</TabPanel>
                <TabPanel>onsite</TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                
            </Tabs>
        </div>
    );
};

export default AllTabs;
