import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEnvelope, FaLink, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [canApply, setCanApply] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  
  const {isPending,  data: job } = useQuery({
      queryKey: ["details", "job"],
      queryFn: async () => {
          const res = await fetch(`http://localhost:3000/details/${_id}`);
          return res.json();
      },
  });

  // useEffect(() => {
  //     setIsLoadingData(false);
  //     if (user.email === job?.email) {
  //         setCanApply(false);
  //     } else {
  //         setCanApply(true);
  //     }
  // }, [user.email, job]);

  const applyNow = () => {
      const deadlineDate = new Date(job.deadlineDate);
      const currentDate = new Date();
      if (deadlineDate.getTime() > currentDate.getTime()) {
          document.getElementById(`my_modal_${_id}`).showModal();
      } else {
          toast.error("Deadline exceeded !");
      }
  }

  const handleSubmit = (e) => {
      
      const resume = e.target.resume.value;
      axios.post(`http://localhost:3000/details/${_id}`)
      axios.post(`http://localhost:3000/applyBy`, {
    ...((({ _id, ...rest }) => ({ ID: _id, ...rest }))(job)), 
    Resume: resume,
    appliedBy: user.displayName,
    applicantEmail: user.email
})
.then(() => {
          Swal.fire({
              title: "Application Done",
              text: "You successfully applied for the job",
              icon: "success",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "OK"
          }).then(() => {
              navigate(`/appliedjobs`);
          });
      }).catch(error => {
          console.error("Error while submitting application:", error);
          toast.error("Failed to submit application. Please try again later.");
      });
  }

  const { data: applicationData ,isLoading} = useQuery({
      queryKey: ['checkApplication', _id, user.email],
      queryFn: async () => {
          const response = await axios.get(`http://localhost:3000/checkApplication`, {
              params: {
                  jobId: _id,
                  applicantEmail: user.email
              }
          });
          return response.data;
      }
  });

  console.log(applicationData)
  useEffect(() => {
    setIsLoadingData(false);
    const isOwner = user.email === job?.email;
    const hasApplied = applicationData?.applied;
    console.log(isOwner, !hasApplied)
    if (isOwner || hasApplied) {
        setCanApply(false);
    } else {
        setCanApply(true);
    }
}, [user.email, job, applicationData]);



  if (isPending || isLoadingData || isLoading) {
      return <Loading />;
  }

    return (
        <div>
            <div id="container" className="shadow-rose-100 flex flex-col-reverse lg:flex-row justify-between lg:h-[400px] lg:w-[700px]">
                <div className="product-details lg:w-1/2 overflow-y-scroll">
                    <div className="size-14 mx-auto">
                        <img className="rounded-full" src={job.jobPicture} alt="" />
                    </div>
                    <div className="text-2xl font-bold mb-1 font-elec text-center text-indigo-400">{job.jobTitle}</div>
                    <p className="information text-center ">{job.jobDescription}</p>
                    {canApply && (
                        <button onClick={applyNow} className="btn bg-info text-white font-semibold font-serif text-xl flex w-full justify-center mt-1 border-0"> Apply Now</button>
                    )}
                    {!canApply && (
                        <button className="btn bg-error text-white font-semibold font-serif flex w-full justify-center mt-1 border-0 cursor-not-allowed">You cannot apply !</button>
                    )}
                </div>
                <div className="product-image w-full h-[400px] lg:w-1/2">
                    <img src={job.jobPicture} alt="" />
                    <div className="info text-info">
                        <h2> Detailed Info</h2>
                        <ul className="">
                            <li className="text-white">
                                <strong className="text-accent">Posted By : </strong>
                                {job.postedBy}
                            </li>
                            <li className="text-white">
                                <strong className="text-accent"> Category : </strong>
                                {job.jobCategory}
                            </li>
                            <li className="text-white">
                                <strong className="text-accent"> Salary-Range : </strong>
                                {job.salaryRange}
                            </li>
                            <li className="text-white">
                                <strong className="text-accent"> Applicants : </strong>
                                {job.jobApplicantsNumber}
                            </li>
                            <li className="text-white">
                                <strong className="text-accent"> Job-Posting-Date : </strong>
                                {job.jobPostingDate}
                            </li>
                            <li className="text-white">
                                <strong className="text-accent"> Deadline : </strong>
                                {job.deadlineDate}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action">
                        <form method="dialog" className="w-full " onSubmit={handleSubmit}>
                            <label className="input input-bordered w-full flex items-center gap-2">
                                <FaEnvelope />
                                <input type="text" className="w-full" placeholder="Email" value={user.email} disabled />
                            </label>
                            <label className="input input-bordered w-full flex items-center gap-2">
                                <FaUser />
                                <input type="text" className="w-full" placeholder="Username" value={user.displayName} disabled />
                            </label>
                            <label className="input input-bordered w-full flex items-center gap-2">
                                <FaLink />
                                <input type="text" name="resume" className="w-full" placeholder="Resume Link" required />
                            </label>
                            <div className="flex justify-end mt-2">
                                <button type="submit" className="btn bg-green-600">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default JobDetails;
