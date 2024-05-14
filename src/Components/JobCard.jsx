import { Link } from "react-router-dom";
import { IoCalendarOutline, IoPersonOutline, IoCashOutline, IoEyeOutline } from 'react-icons/io5';

const JobCard = ({ job }) => {
    const truncateDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 10) {
            return words.slice(0, 10).join(' ') + '...';
        } else {
            return description;
        }
    };

    return (
        <Link to={`/details/${job._id}`} className="card">
            <h2 className="card-title bg-accent font-elec">{job.jobTitle}</h2>
            <div className="">
                <img src={job.jobPicture} className="h-[200px] w-[250px]" alt="" />
            </div>
            <div className="card-desc bg-base-100 text-ellipsis">{truncateDescription(job.jobDescription)}
            <p className="flex items-center flex-wrap gap-1 text-green-600">
                <IoCalendarOutline />{job.jobPostingDate}
            </p>
            <p className="flex items-center flex-wrap gap-1 text-red-600">
                <IoCalendarOutline />{job.deadlineDate}
            </p>
            <p className="flex items-center flex-wrap gap-1 text-lime-400">
                <IoCashOutline />{job.salaryRange}
            </p>
            <p className="flex items-center flex-wrap gap-1 text-info">
                <IoPersonOutline />  {job.jobApplicantsNumber}
            </p>
            <Link to={`/details/${job._id}`} className="btn btn-primary flex justify-center">
                <IoEyeOutline /> View Details
            </Link></div>
            
        </Link>
    );
};

export default JobCard;
