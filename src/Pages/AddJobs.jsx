import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useState } from "react"; 
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import axios from "axios";

const AddJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(new Date()); 
  const navigate = useNavigate();

  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const email = user.email;
    const userPhoto=user.photoURL;
    const deadlineDate = deadline.toISOString().split('T')[0];
  const jobPostingDate = new Date().toISOString().split('T')[0];
    axios.post('http://localhost:3000/all',{...data,jobPostingDate,deadlineDate,postedBy:user.displayName,email,userPhoto:userPhoto?userPhoto:'/profile.png'})
    Swal.fire({
      title: "Job Added",
      text: "Your job has been successfully added.",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK"
    }).then(() => {
      navigate(`/myjobs`);
    });
  };

  return (
    <div className="p-3 hero bg-svg-background">
      <form className="card-body w-full" onSubmit={handleAddJob}>
        {/* Job Picture URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elec">Picture URL</span>
          </label>
          <input
            type="text"
            placeholder="Job Banner URL"
            name="jobPicture"
            className="input input-bordered font-elec"
            required
          />
        </div>
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elec">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="Job Title"
            name="jobTitle"
            className="input input-bordered font-elec"
            required
          />
        </div>
        {/* Logged In User Name and Email (Read-only) */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elec">User Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            name="userName"
            className="input input-bordered font-elec"
            disabled
            required
            defaultValue={user?.displayName}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elec">Email</span>
          </label>
          <input
            type="text"
            placeholder="Your email"
            name="email"
            className="input input-bordered font-elec"
            required
            disabled
            defaultValue={user?.email}
          />
        </div>
        {/* Job Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elec">Category</span>
          </label>
          <select name="jobCategory" className="select select-bordered w-full">
            <option>On Site</option>
            <option>Remote</option>
            <option>Part-Time</option>
            <option>Hybrid</option>
          </select>
        </div>
        {/* Salary Range */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elec">Salary Range</span>
          </label>
          <input
            type="text"
            placeholder="Salary Range"
            name="salaryRange"
            className="input input-bordered font-elec"
            required
          />
        </div>
        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elec">Description</span>
          </label>
          <textarea
            placeholder="Job Description"
            name="jobDescription"
            className="textarea h-24 textarea-bordered font-elec"
            required
          />
        </div>
        {/* Job Posting Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elec">Posting Date</span>
          </label>
          <input
            type="text"
            value={new Date().toLocaleDateString()}
            className="input input-bordered font-elec"
            disabled
          />
        </div>
        {/* Application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elec">Application Deadline</span>
          </label>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            className="input input-bordered font-elec"
            required
          />
        </div>
        {/* Job Applicants Number */}
        <input
          type="hidden"
          name="jobApplicantsNumber"
          value={0}
        />

        {/* Submit Button */}
        <div className="form-control">
          <button
            type="submit"
            className="btn btn-accent font-elec w-1/2 lg:w-1/4 mx-auto"
          >
            ADD JOB
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
