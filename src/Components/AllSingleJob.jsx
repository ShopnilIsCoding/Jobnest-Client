import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const AllSingleJobs = ({job}) => {
    
    return (
        
        <>
              
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={job.userPhoto} alt="User" />
              </div>
            </div>
            <div>
              <div className="font-bold font-serif text-nowrap">{job.title}</div>
              
            </div>
          </div>
        </td>
        <td className="font-serif text-nowrap text-lg">
          {job.postingDate}
          
        </td>
        <td className="font-serif text-lg">{job.deadline}</td>
        <td className="font-serif text-nowrap">{job.salaryRange}</td>
        <th>
          <Link to={`/details/${job._id}`}><button className="btn btn-ghost btn-xs text-lg flex justify-center items-center flex-nowrap"><BsFillArrowUpRightCircleFill></BsFillArrowUpRightCircleFill><p>Details</p></button></Link>
        </th>
      </tr></>
    );
};

export default AllSingleJobs;