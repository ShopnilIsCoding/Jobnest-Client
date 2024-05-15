

const Footer = () => {
    return (
        <footer className=" footer p-10 bg-gray-900 text-base-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
            <aside>
                <img src={'/logo.jpg'} className="size-20 rounded-full border-2 border-violet-300" alt="Company Logo" />
                <p className="text-white">We Help You Find Your Dream Job <br /><span className=' font-serif font-black'>&copy; {new Date().getFullYear()} <span className='font-meri text-xl'>JOBNEST</span>. All Rights Reserved.</span></p>
            </aside>
            <div  className="p-5">
                <h6 className="footer-title text-gray-400">Job Categories</h6>
                <a className="link link-hover text-white">All Jobs</a>
                <a className="link link-hover text-white">Hybrid Jobs</a>
                <a className="link link-hover text-white">Onsite Jobs</a>
                <a className="link link-hover text-white">Remote Jobs</a>
                <a className="link link-hover text-white">Part-time Jobs</a>
            </div >
            <div className="p-5">
                <h6 className="footer-title text-gray-400">Resources</h6>
                <a className="link link-hover text-white">Resume Tips</a>
                <a className="link link-hover text-white">Interview Preparation</a>
                <a className="link link-hover text-white">Career Advice</a>
            </div>
            <div className="p-5">
                <h6 className="footer-title text-gray-400">Legal</h6>
                <a className="link link-hover text-white">Terms of Service</a>
                <a className="link link-hover text-white">Privacy Policy</a>
                <a className="link link-hover text-white">Cookie Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
