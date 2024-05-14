import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import AllSingleJobs from "../Components/AllSingleJob";

const AllJobs = () => {
  const { isPending, data: jobs } = useQuery({
    queryKey: ["all", "jobs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/all");
      return res.json();
    },
  });
  const [showContent, setShowContent] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (isPending || !showContent) {
    return <Loading></Loading>;
  }

  const filteredJobs = jobs.filter(job =>
    job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <div className="flex w-full justify-center">
  <div className="search">
    <div>
      <input type="text"
          placeholder="Search by Job Title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  </div>
</div>
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
              {filteredJobs.map((job) => (
                <AllSingleJobs key={job._id} job={job} detail={true}></AllSingleJobs>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
