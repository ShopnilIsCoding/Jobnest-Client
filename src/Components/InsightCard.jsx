import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import 'animate.css';

import { FaLocationArrow } from "react-icons/fa6";

const InsightCard = ({ job, selected, idx }) => {
  const [percentage, setPercentage] = useState(0);
  const [progressColor, setProgressColor] = useState("");

  useEffect(() => {
    const matchedSkills = job.skills.filter(skill =>
      selected.some(selectedSkill => selectedSkill.value === skill.value)
    );

    const matchedPercentage = (matchedSkills.length / job.skills.length) * 100;

    setPercentage(matchedPercentage);

    if (matchedPercentage < 30) {
      setProgressColor("progress-error");
    } else if (matchedPercentage >= 30 && matchedPercentage < 70) {
      setProgressColor("progress-warning");
    } else {
      setProgressColor("progress-success");
    }
  }, [job, selected]);

  return (
    <div className={`border border-violet-400 lg:rounded-l-full lg:rounded-tr-full flex gap-2 items-center animate__animated animate__fadeInDown`}>
      <img src={job.jobPicture} className="size-24 rounded-full" alt="" />
      <div className="flex-1 p-2">
        <div className="flex flex-col lg:flex-row gap-2">
          <h2 className="text-accent font-meri">{job.jobTitle}</h2>
          <h3 className="text-info font-elec">
            Required skills :{" "}
            <span className="inline-flex flex-wrap gap-1">
              {job.skills.map(skill => (
                <p
                  key={skill.value}
                  style={{ backgroundColor: skill.color }}
                  className="px-1 text-white"
                >
                  {skill.value}
                </p>
              ))}
            </span>
          </h3>
        </div>
        <progress className={`progress ${progressColor}`} value={percentage} max={100}></progress>
        <div className="flex items-center justify-between pb-1 flex-wrap">
          <p></p>
          <p className="text-success">
            <span className="text-2xl font-serif font-bold">
              <CountUp start={0} end={percentage} duration={2} decimals={0} />
            </span>{"% "}
            <span className="font-meri text-md">Matched!</span>
          </p>
          <Link to={`/details/${job._id}`} className="bg-red-800 px-2 rounded-full text-white font-meri">
            Apply <FaLocationArrow className="inline" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
