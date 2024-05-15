import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import AllSingleJobs from "../Components/AllSingleJob";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [itemjobs, setItemjobs] = useState([]);
    const {isFetched, data: jobs } = useQuery({
        queryKey: ["my", "jobs"],
        queryFn: async () => {
          const res = await axios.get(`https://jobnestbd.vercel.app/posted?email=${user.email}`,{
            withCredentials:true
            
        });
          return res.data;
        },
      });
      useEffect(()=>{
        setItemjobs(jobs);
      },[isFetched,jobs])
      
      
      if(!isFetched )
        {
            return <Loading></Loading>
        }
        if(jobs.length<=0)
          {
            return <h1 className="text-2xl my-2 text-info  w-fit mx-auto flex flex-col justify-center items-center"> You haven't Posted a Job Yet <Link className="btn btn-info ml-1" to={'/add'} >Post Now!</Link></h1>
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