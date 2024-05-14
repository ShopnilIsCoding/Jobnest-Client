import { useQuery } from '@tanstack/react-query';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Loading from './Loading';
import JobCard from './JobCard';

const AllTabs = () => {
    const { isPending, data: jobs } = useQuery({
        queryKey: ["all", "jobs"],
        queryFn: async () => {
          const res = await fetch("http://localhost:3000/all");
          return res.json();
        },
    });

    if (isPending) {
        return <Loading />;
    }

    // Function to filter jobs based on job category
    const filterJobsByCategory = (category) => {
        return jobs.filter(job => job.jobCategory === category);
    };

    return (
        <div className='mt-3 lg:mt-6'>
            <Tabs>
                <TabList>
                    <Tab selectedClassName='bg-accent'>All Jobs</Tab>
                    <Tab selectedClassName='bg-accent'>Onsite Jobs</Tab>
                    <Tab selectedClassName='bg-accent'>Remote Jobs</Tab>
                    <Tab selectedClassName='bg-accent'>Hybrid Jobs</Tab>
                    <Tab selectedClassName='bg-accent'>Part-time Jobs</Tab>
                </TabList>
                <TabPanel >
                    {/* Display all jobs */}
                    <div className=' flex flex-wrap justify-center'>
                    {jobs.map(job => (
                         <JobCard key={job._id} job={job}></JobCard>
                    ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* Display onsite jobs */}
                    <div className=' flex flex-wrap justify-center items-center'>
                    {filterJobsByCategory('On Site').map(job => (
                        <JobCard key={job._id} job={job}></JobCard>
                    ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* Display remote jobs */}
                    <div className=' flex flex-wrap justify-center'>
                    {filterJobsByCategory('Remote').map(job => (
                        <JobCard key={job._id} job={job}></JobCard>
                    ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* Display hybrid jobs */}
                    <div className=' flex flex-wrap justify-center'>
                    {filterJobsByCategory('Hybrid').map(job => (
                        <JobCard key={job._id} job={job}></JobCard>
                    ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* Display part-time jobs */}
                    <div className=' flex flex-wrap justify-center'>
                    {filterJobsByCategory('Part-Time').map(job => (
                        <JobCard key={job._id} job={job}></JobCard>
                    ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AllTabs;
