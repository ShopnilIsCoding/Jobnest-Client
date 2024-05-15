import React, { useContext, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Components/Loading";
import AllSingleJobs from "../Components/AllSingleJob";
import { Link } from "react-router-dom";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { AuthContext } from "../Providers/AuthProvider";

// Import logo image
import logo from '/logo.jpg';
import { FaFileDownload } from "react-icons/fa";

const MyDocument = ({ jobs }) => (
  <Document>
    <Page size="A4">
      <View style={styles.section}>
        {/* Add logo image */}
        <Image src={logo} style={styles.logo} />
        <Text style={styles.header}>Applied Jobs</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.headerCell}>Job Title</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.headerCell}>Posting Date</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.headerCell}>Deadline</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.headerCell}>Salary Range</Text>
            </View>
          </View>
          {jobs.map((job) => (
            <View style={styles.tableRow} key={job._id}>
              <View style={styles.tableCell}>
                <Text>{job.jobTitle}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{job.jobPostingDate}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{job.deadlineDate}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{job.salaryRange}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  logo: {
    marginBottom: 10,
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
    alignSelf: "center",
  },
  table: {
    display: "table",
    width: "auto",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  tableCell: {
    borderRightColor: "#000",
    borderRightWidth: 1,
    padding: 5,
    flex: 1,
  },
  headerCell: {
    fontWeight: "bold",
  },
});

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const { isFetched, data: jobs } = useQuery({
    queryKey: ["applied", "jobs"],
    queryFn: async () => {
      const res = await axios.get(`https://jobnestbd.vercel.app/applyByAll?email=${user.email}`,{
        withCredentials:true
      });
      return res.data;
    },
  });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const filteredJobs = jobs?.filter((job) => {
    if (selectedCategory === "All") {
      return true;
    }
    return job.jobCategory.toLowerCase() === selectedCategory.toLowerCase();
  });

  if (!isFetched) {
    return <Loading />;
  }
  if (isFetched && jobs.length <= 0) {
    return (
      <>
        <div role="alert" className="alert flex justify-center flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-error shrink-0 size-16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className="text-2xl text-center text-error font-elec">You have not applied for any job yet!</span>
          <div>
            <Link to={'/all'}><button className="btn btn-sm btn-info">Apply Now!</button></Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="">
      <div className=" my-2">
        <div className="selects mx-auto">
          <select value={selectedCategory} onChange={handleCategoryChange} className="border border-accent">
            <option value="All">All</option>
            <option className="bg-base-100" value="Remote">Remote</option>
            <option className="bg-base-100" value="Part-Time">Part-Time</option>
            <option className="bg-base-100" value="Hybrid">Hybrid</option>
            <option className="bg-base-100" value="On Site">On Site</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-scroll">
        <table className="table">
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
              <AllSingleJobs key={job._id} job={job} update={false} del={false}></AllSingleJobs>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center relative">
      
      <PDFDownloadLink className="btn btn-info mt-2 " document={<MyDocument jobs={filteredJobs} />} fileName="applied_jobs.pdf" style={{ textDecoration: 'none' }}><FaFileDownload className=" "></FaFileDownload> Download PDF
        {({  loading }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
      </div>
    </div>
  );
};

export default AppliedJobs;
