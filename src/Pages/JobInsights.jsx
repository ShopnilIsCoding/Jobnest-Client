import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { skills as allSkills } from "./AddJobs";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import InsightCard from "../Components/InsightCard";

const JobInsights = () => {
  const { user } = useContext(AuthContext);
  const animatedComponents = makeAnimated();
  const [selectedSkills, setSelectedSkills] = useState([]);

  
  useEffect(() => {
    const fetchSkills = async () => {
      const res = await fetch(`https://jobnestbd.vercel.app/skills?email=${user.email}`);
      const data = await res.json();
      const formattedSkills = data.map(skillValue => {
        const skill = allSkills.find(s => s.value === skillValue);
        return skill ? { value: skill.value, label: skill.label, color: skill.color } : null;
      }).filter(skill => skill !== null);
      setSelectedSkills(formattedSkills);
    };

    fetchSkills();
  }, [user.email]);

  const { isPending, data: jobs } = useQuery({
    queryKey: ["insights", "jobs"],
    queryFn: async () => {
      const res = await fetch("https://jobnestbd.vercel.app/all");
      return res.json();
    },
  });

  if (isPending) {
    return <Loading />;
  }

  const handleChange = async (selectedOptions) => {
    setSelectedSkills(selectedOptions);
    const skillsToSave = selectedOptions.map(option => option.value);
    await fetch("https://jobnestbd.vercel.app/skills", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: user.email, skills: skillsToSave })
    });
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "inherit",
      borderColor: "inherit",
      boxShadow: "none",
      "&:hover": {
        borderColor: "inherit",
      },
    }),
    multiValue: (styles, { data }) => ({
      ...styles,
      backgroundColor: data.color,
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: "white",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: "white",
      ":hover": {
        backgroundColor: data.color,
      },
    }),
    input: (styles) => ({
      ...styles,
      color: "#7C3AED",
    }),
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-3 px-2 ">
        <div className="lg:w-[30%] flex flex-col  border-r-2 border-dotted border-violet-400">
          <div className="w-full  space-y-3 p-3 text-center flex flex-col items-center ">
            <img src={user.photoURL} className="size-40 rounded-full" alt="Your Photo" />
            <h3 className="text-xl font-elec text-violet-400 font-black">
              {user.displayName}
            </h3>
            <h1 className="font-meri">Add your skills Below</h1>
            <Select
              isMulti
              name="skills"
              options={allSkills}
              className="basic-multi-select select-bordered w-full font-meri"
              classNamePrefix="select"
              value={selectedSkills}
              onChange={handleChange}
              styles={customStyles}
              components={animatedComponents}
            />
          </div>
        </div>
        <div className="lg:w-[70%] p-2 space-y-3 pt-4">
          {jobs.map((job, idx) => (
            <InsightCard key={idx} job={job} selected={selectedSkills} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobInsights;
