import { useQuery } from '@tanstack/react-query';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Loading from './Loading';
import JobCard from './JobCard';

const AllTabs = () => {
    const { isPending, data: jobs } = useQuery({
        queryKey: ["all", "jobs"],
        queryFn: async () => {
          const res = await fetch("https://jobnestbd.vercel.app/all");
          return res.json();
        },
    });

    if (isPending) {
        return <Loading />;
    }

   
    const filterJobsByCategory = (category) => {
        return jobs.filter(job => job.jobCategory === category);
    };

    return (
        <div className='mt-3 lg:mt-6'>
            <hr className=" mx-auto border-dashed mt-3 lg:mt-6 border-accent border-2" />
        <div className="mt-6 lg:mt-12 mb-3 lg:mb-6  text-center mx-auto space-y-2 ">
            <h1 className="text-3xl font-extrabold text-info sm:text-4xl font-meri" data-aos="zoom-in-down">Explore Your Career: Tailored Job Opportunities</h1>
            <p className=" font-serif max-w-lg mx-auto" data-aos="zoom-in-down">Unlock a world of possibilities with our curated job categories. From technology to healthcare, finance to creative fields, discover diverse opportunities tailored to your preferences. Whether you seek hybrid, onsite, remote, or part-time roles, navigate seamlessly through our tab system to find your ideal career path. </p>

        </div>
            <Tabs>
                <TabList>
                    <Tab selectedClassName='bg-accent'>All Jobs</Tab>
                    <Tab selectedClassName='bg-accent'>Onsite Jobs</Tab>
                    <Tab selectedClassName='bg-accent'>Remote Jobs</Tab>
                    <Tab selectedClassName='bg-accent'>Hybrid Jobs</Tab>
                    <Tab selectedClassName='bg-accent'>Part-time Jobs</Tab>
                </TabList>
                <TabPanel >
                    
                    <div className=' flex flex-wrap justify-center'>
                    {jobs.map(job => (
                         <JobCard key={job._id} job={job}></JobCard>
                    ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    
                    <div className=' flex flex-wrap justify-center items-center'>
                    {filterJobsByCategory('On Site').map(job => (
                        <JobCard key={job._id} job={job}></JobCard>
                    ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    
                    <div className=' flex flex-wrap justify-center'>
                    {filterJobsByCategory('Remote').map(job => (
                        <JobCard key={job._id} job={job}></JobCard>
                    ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    
                    <div className=' flex flex-wrap justify-center'>
                    {filterJobsByCategory('Hybrid').map(job => (
                        <JobCard key={job._id} job={job}></JobCard>
                    ))}
                    </div>
                </TabPanel>
                <TabPanel>
                   
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
