import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import AllSingleJobs from "../Components/AllSingleJob";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";

const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [itemjobs, setItemjobs] = useState([]);
    const {isFetched, data: jobs } = useQuery({
        queryKey: ["my", "jobs"],
        queryFn: async () => {
          const res = await axios.get(`http://localhost:3000/posted?email=${user.email}`,{
            
        });
          return res.data;
        },
      });
      useEffect(()=>{
        setItemjobs(jobs);
      },[isFetched,jobs])
      
      console.log(itemjobs)
      if(!isFetched )
        {
            return <Loading></Loading>
        }
    return (
        
    
        <div>
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
                    {itemjobs?.map((job) => (
                      <AllSingleJobs key={job._id} job={job} update={true} del={true} itemjobs={itemjobs} setItemjobs={setItemjobs}></AllSingleJobs>
                    ))}
                  </tbody>
                </table>
              </div>
        </div>
    );
};

export default MyJobs;