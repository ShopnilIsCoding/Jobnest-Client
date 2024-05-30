import  { useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import axios from "axios";
import Select from 'react-select';

export const skills = [
  { value: 'JavaScript', label: 'JavaScript', color: '#F0DB4F' },
  { value: 'React', label: 'React', color: '#61DBFB' },
  { value: 'Node.js', label: 'Node.js', color: '#68A063' },
  { value: 'CSS', label: 'CSS', color: '#264de4' },
  { value: 'HTML', label: 'HTML', color: '#e34c26' },
  { value: 'Python', label: 'Python', color: '#306998' },
  { value: 'Django', label: 'Django', color: '#092E20' },
  { value: 'SQL', label: 'SQL', color: '#00758F' },
  { value: 'NoSQL', label: 'NoSQL', color: '#4DB33D' },
  { value: 'GraphQL', label: 'GraphQL', color: '#E10098' },
  { value: 'AWS', label: 'AWS', color: '#FF9900' },
  { value: 'Docker', label: 'Docker', color: '#2496ED' },
  { value: 'Kubernetes', label: 'Kubernetes', color: '#326CE5' },
  { value: 'Git', label: 'Git', color: '#F1502F' },
  { value: 'Agile', label: 'Agile', color: '#6c757d' },
  { value: 'Scrum', label: 'Scrum', color: '#f39c12' },
  { value: 'UI/UX', label: 'UI/UX', color: '#f56f36' },
  { value: 'Photoshop', label: 'Photoshop', color: '#31a8ff' },
  { value: 'Illustrator', label: 'Illustrator', color: '#ff9a00' },
  { value: 'Content Writing', label: 'Content Writing', color: '#16a085' },
  { value: 'SEO', label: 'SEO', color: '#c0392b' },
  { value: 'Data Analysis', label: 'Data Analysis', color: '#3498db' },
  { value: 'Machine Learning', label: 'Machine Learning', color: '#9b59b6' },
  { value: 'Deep Learning', label: 'Deep Learning', color: '#8e44ad' },
  { value: 'Product Management', label: 'Product Management', color: '#34495e' },
  { value: 'Graphic Designer', label: 'Graphic Designer', color: '#f56f36' },
  { value: 'Administrative Assistant', label: 'Administrative Assistant', color: '#f39c12' },
  { value: 'SEO', label: 'SEO', color: '#c0392b' },
  { value: 'Data Analysis', label: 'Data Analysis', color: '#3498db' },
  { value: 'Product Management', label: 'Product Management', color: '#34495e' },
  { value: 'Copywriting', label: 'Copywriting', color: '#2ecc71' },
  { value: 'Digital Marketing', label: 'Digital Marketing', color: '#9b59b6' },
  { value: 'Brand Management', label: 'Brand Management', color: '#e74c3c' },
  { value: 'UX Research', label: 'UX Research', color: '#27ae60' },
  { value: 'UI Design', label: 'UI Design', color: '#3498db' },
  { value: 'Frontend Development', label: 'Frontend Development', color: '#2980b9' },
  { value: 'Backend Development', label: 'Backend Development', color: '#c0392b' },
  { value: 'Mobile App Development', label: 'Mobile App Development', color: '#f39c12' },
  { value: 'Quality Assurance', label: 'Quality Assurance', color: '#1abc9c' },
  { value: 'Project Management', label: 'Project Management', color: '#34495e' },
];

const AddJobs = () => {
  const { user, loading } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(new Date()); 
  const navigate = useNavigate();

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: 'inherit',
      borderColor: 'inherit',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'inherit',
      },
    }),
    multiValue: (styles, { data }) => ({
      ...styles,
      backgroundColor: data.color,
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: 'white',
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: 'white',
      ':hover': {
        backgroundColor: data.color,
        color: 'black',
      },
    }),
  };

  if (loading) {
    return <Loading />;
  }

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const email = user.email;
    const userPhoto = user.photoURL;
    const deadlineDate = deadline.toISOString().split('T')[0];
    const jobPostingDate = new Date().toISOString().split('T')[0];
    
    axios.post('https://jobnestbd.vercel.app/all', {
      ...data,
      jobPostingDate,
      deadlineDate,
      postedBy: user.displayName,
      email,
      userPhoto: userPhoto ? userPhoto : '/profile.png',
      skills: selectedSkills
    }).then(() => {
      Swal.fire({
        title: "Job Added",
        text: "Your job has been successfully added.",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK"
      }).then(() => {
        navigate(`/myjobs`);
      });
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
        {/* required skills */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elec">Required Skills</span>
          </label>
          <Select
            isMulti
            name="skills"
            options={skills}
            className="basic-multi-select select-bordered w-full"
            classNamePrefix="select"
            value={selectedSkills}
            onChange={handleChange}
            styles={customStyles}
          />
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

