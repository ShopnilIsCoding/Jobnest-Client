import React, { useContext } from "react";
import axios from "axios";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdOutlineEdit } from "react-icons/md";
import { FaBriefcase, FaCalendarAlt, FaClipboard, FaDollarSign, FaImage } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const AllSingleJobs = ({ job, detail, del, itemjobs, setItemjobs,update }) => {
  const {user}=useContext(AuthContext);
  const validate=()=>
    {
            if(!user)
                {
                    toast.error("You have to log in first to view details")
                }
    }
    
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://jobnestbd.vercel.app/delete/${job._id}`)
          .then((response) => {
          
            const remainingItemjobs = itemjobs.filter(
              (filterjobs) => filterjobs._id != _id
              
            );
           
            setItemjobs(remainingItemjobs);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };
  const handleUpdate = (e) => {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    axios.patch(`https://jobnestbd.vercel.app/update/${job._id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        Swal.fire({
            title: "Data has been updated!",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        });
    })
  }

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
              <div className="font-bold font-serif text-nowrap">
                {job.jobTitle}
              </div>
              <span className="badge badge-ghost badge-sm px-0 text-nowrap font-elec text-accent px-2">
                Posted By {job.postedBy}
              </span>
            </div>
          </div>
        </td>
        <td className="font-serif text-nowrap text-lg">{job.jobPostingDate}</td>
        <td className="font-serif text-lg">{job.deadlineDate}</td>
        <td className="font-serif text-nowrap">{job.salaryRange}</td>
        {detail ? (
          <th>
            <Link onClick={validate} to={`/details/${job._id}`}>
              <button className="btn py-4 btn-accent btn-outline btn-xs text-lg flex justify-center items-center flex-nowrap">
                <BsFillArrowUpRightCircleFill />
                <p>Details</p>
              </button>
            </Link>
          </th>
        ) : (
          <></>
        )}
        {
          update && del && <td className="flex items-center gap-2">
          {del && (
            <button
              onClick={()=>handleDelete(job._id)}
              className="p-2 border rounded-full border-red-600"
            >
              <RiDeleteBin6Fill className="text-red-600 text-2xl" />
            </button>
          )}
          {update && (
                        <button
                          onClick={() => {
                            document.getElementById(`my_modal_${job._id}`).showModal();
                            
                          }}
                          className="p-2 border rounded-full border-green-600"
                        >
                          <MdOutlineEdit className=" text-green-600 text-2xl" />
                        </button>
                      )}
          </td>
        }
      </tr>
      <dialog id={`my_modal_${job._id}`} className="modal modal-bottom sm:modal-middle">
    <div className="modal-box">
        <div className="modal-action">
            <form method="dialog" className="w-full " onSubmit={handleUpdate}>
                <label className="input input-bordered w-full flex items-center gap-2">
                    <FaImage />
                    <input defaultValue={job.jobPicture} type="text" name="jobPicture" className="w-full" placeholder="Job Picture URL" />
                </label>
                <label className="input input-bordered w-full flex items-center gap-2">
                    <FaBriefcase />
                    <input defaultValue={job.jobTitle} type="text" name="jobTitle" className="w-full" placeholder="Job Title" />
                </label>
                <label className="input input-bordered w-full flex items-center gap-2">
                    <FaDollarSign />
                    <input defaultValue={job.salaryRange} type="text" name="salaryRange" className="w-full" placeholder="Salary Range" />
                </label>
                <label className="input input-bordered w-full flex items-center gap-2">
                    <FaClipboard />
                    <input defaultValue={job.jobDescription} type="text" name="jobDescription" className="w-full" placeholder="Job Description" rows="3"></input>
                </label>
                <label className="input input-bordered w-full flex items-center gap-2">
                    <FaCalendarAlt />
                    <input defaultValue={job.deadlineDate} type="date" name="deadlineDate" className="w-full" placeholder="Deadline Date" />
                </label>
                <div className="flex justify-end mt-2">
                    <button type="submit" className="btn bg-green-600">Update</button>
                </div>
            </form>
        </div>
    </div>
</dialog>

    </>
  );
};

export default AllSingleJobs;
