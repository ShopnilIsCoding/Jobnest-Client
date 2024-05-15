import { GrLike, GrUserExpert } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import CountUp from 'react-countup';

const WhyUS = () => {
  return (
    <section className="why-us-section bg-base-100 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold font-meri text-info sm:text-4xl" data-aos="zoom-in-down">
          Discover Opportunities with Us
          </h2>
          <p className="mt-4 text-lg  font-serif max-w-lg mx-auto" data-aos="zoom-in-down">
            Discover why we're the top choice for job seekers worldwide. Our dedication to excellence, commitment to service, and expert guidance set us apart.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 lg:gap-8">
          <div className="why-us-item flex flex-col items-center bg-base-100  p-6 rounded-lg shadow-xl border border-info" data-aos="zoom-out-down">
            <div className="icon bg-blue-500  rounded-full p-3 mb-4">
              <RiCustomerService2Line className="text-xl" />
            </div>
            <h3 className="text-xl font-medium text-info mb-2">
              Personalized Service
            </h3>
            <p className="text-base  font-serif text-center">
              We provide personalized service to every job seeker, ensuring your needs are met every step of the way.
            </p>
          </div>
          <div className="why-us-item flex flex-col items-center bg-base-100 shadow-lg p-6 rounded-lg hadow-xl border border-info" data-aos="zoom-out-down" data-aos-delay="200">
            <div className="icon bg-green-500  rounded-full p-3 mb-4">
              <GrLike />
            </div>
            <h3 className="text-xl font-medium text-info mb-2">
              Quality Job Listings
            </h3>
            <p className="text-base  font-serif text-center ">
              Our job listings are of the highest quality, carefully curated to match your skills and preferences.
            </p>
          </div>
          <div className="why-us-item flex flex-col items-center bg-base-100 shadow-lg p-6 rounded-lg hadow-xl border border-info" data-aos="zoom-out-down" data-aos-delay="400">
            <div className="icon bg-purple-500  rounded-full p-3 mb-4">
              <GrUserExpert />
            </div>
            <h3 className="text-xl font-medium text-info mb-2">
              Expert Guidance
            </h3>
            <p className="text-base  font-serif text-center ">
              With our expert guidance, you'll make informed decisions and find the perfect job for your career goals.
            </p>
          </div>
        </div>
      </div>
      <div className="stats-container mx-auto max-w-7xl px-4 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="stat bg-base-100 shadow-lg p-6 rounded-lg hadow-xl border border-info" data-aos="fade-up">
            <div className="flex items-center mb-4">
              <div className="icon bg-blue-500  rounded-full p-3 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <div className="text-xl font-medium text-info">Total Job Placements</div>
                <div className="text-lg  font-serif">
                  <CountUp start={0} end={1500} duration={2.5} />
                </div>
                <div className=" font-serif">This Quarter</div>
              </div>
            </div>
          </div>
          <div className="stat bg-base-100 shadow-lg p-6 rounded-lg shadow-xl border border-info" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-4">
              <div className="icon bg-green-500  rounded-full p-3 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <div>
                <div className="text-xl font-medium text-info">New Job Seekers</div>
                <div className="text-lg  font-serif">
                  <CountUp start={0} end={457} duration={2.5} />
                </div>
                <div className=" font-serif">This Month</div>
              </div>
            </div>
          </div>
          <div className="stat bg-base-100 shadow-lg p-6 rounded-lg border border-info" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center mb-4">
              <div className="icon bg-purple-500  rounded-full p-3 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
              </div>
              <div>
                <div className="text-xl font-medium text-info">Job Satisfaction Rate</div>
                <div className="text-lg  font-serif">95%</div>
                <div className=" font-serif">Highest Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default WhyUS;
