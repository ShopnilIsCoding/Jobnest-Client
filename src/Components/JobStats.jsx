import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const JobStats = () => {
  // Define state for each stat
  const [totalJobs, setTotalJobs] = useState(0);
  const [newJobsThisMonth, setNewJobsThisMonth] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);

  // Simulating API call to fetch data
  useEffect(() => {
    
    const fetchData = () => {
      
      setTimeout(() => {
        setTotalJobs(1500);
        setNewJobsThisMonth(457);
        setSatisfactionRate(92);
      }, 1500); 
    };

    fetchData();
  }, []);

  return (
    <div className="stats w-full lg:max-w-lg mx-auto mt-2 shadow lg:absolute lg:z-10 lg:right-2  top-0 overflow-scroll">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center justify-between lg:space-x-4">
          <div className="stat">
            <div className="stat-value text-accent font-elec">
              <CountUp start={0} end={totalJobs} duration={2} />
            </div>
            <div className="stat-desc text-info font-meri">Total Jobs</div>
          </div>
          <div className="stat">
            <div className="stat-value text-accent font-elec">
              <CountUp start={0} end={newJobsThisMonth} duration={2} />
            </div>
            <div className="stat-desc text-info font-meri">New Jobs This Month</div>
          </div>
          <div className="stat">
            <div className="stat-value text-accent font-elec">
              <CountUp start={0} end={satisfactionRate} duration={2} suffix="%" />
            </div>
            <div className="stat-desc text-info font-meri">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStats;
