import { useQuery } from "@tanstack/react-query";
import JobCard from "../Components/JobCard";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import Loading from "../Components/Loading";
import AllSingleJobs from "../Components/AllSingleJob";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const { isPending, data: jobs } = useQuery({
        queryKey: ["applied", "jobs"],
        queryFn: async () => {
          const res = await axios.get(`http://localhost:3000/applyByAll?email=${user.email}`,{
            
        });
          return res.data;
        },
      });

      const [selectedCategory, setSelectedCategory] = useState("All"); 

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const filteredJobs = selectedCategory === "All" ? jobs : jobs.filter(job => job.category === selectedCategory);

      if(isPending)
        {
            return <Loading></Loading>
        }
        if(filteredJobs.length<=0)
            {
                return (<>
               
            <select value={selectedCategory} onChange={handleCategoryChange} className="mb-4">
        <option value="All">All</option>
        <option value="Category1">Category1</option>
        <option value="Category2">Category2</option>
        
      </select>
                
                <div role="alert" className="alert flex justify-center flex-col">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-error shrink-0 size-16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span className="text-2xl text-center text-error font-elec">You have not applied for any job yet!</span>
  <div>
   
    <Link to={'/all'}><button className="btn btn-sm btn-info">Apply Now!</button></Link>
  </div>
</div></>)
            }
    return (
        <div className="">
            <select value={selectedCategory} onChange={handleCategoryChange} className="mb-4">
        <option value="All">All</option>
        <option value="Category1">Category1</option>
        <option value="Category2">Category2</option>
        
      </select>
            {
                <div className="overflow-x-scroll">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th className="text-violet-500 font-elec text-lg">Job Title</th>
                      <th className="text-violet-500 font-elec text-lg">Posting Date</th>
                      <th className="text-violet-500 font-elec text-lg">Deadline</th>
                      <th className="text-violet-500 font-elec text-lg">Salary range</th>
                      <th className="text-violet-500 font-elec text-lg"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <AllSingleJobs key={job._id} job={job}></AllSingleJobs>
                    ))}
                  </tbody>
                </table>
              </div>
            }
        </div>
    );
};

export default AppliedJobs;