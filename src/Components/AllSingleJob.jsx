import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const AllSingleJobs = ({job,detail}) => {
    
    return (
        
        <>
              
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={job.jobPicture} alt="User" />
              </div>
            </div>
            <div>
              <div className="font-bold font-serif text-nowrap">{job.jobTitle}</div>
              <span className="badge badge-ghost badge-sm px-0 text-nowrap font-elec text-accent px-2">Posted By {job.postedBy}</span>
            </div>
          </div>
        </td>
        <td className="font-serif text-nowrap text-lg">
          {job.jobPostingDate}
          
        </td>
        <td className="font-serif text-lg">{job.deadlineDate}</td>
        <td className="font-serif text-nowrap">{job.salaryRange}</td>
        {detail ? <th>
          <Link to={`/details/${job._id}`}><button className="btn py-4 btn-accent btn-outline btn-xs text-lg flex justify-center items-center flex-nowrap"><BsFillArrowUpRightCircleFill></BsFillArrowUpRightCircleFill><p>Details</p></button></Link>
        </th>:<></>}
      </tr></>
    );
};

export default AllSingleJobs;