

const Footer = () => {
    return (
        <footer className="animate__animated animate__fadeInUp footer p-10 bg-base-200 text-base-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
            <aside>
                <img src={'/logo.png'} className="size-20" alt="Company Logo" />
                <p>We Help You Find Your Dream Job <br /><span className=' font-serif font-black'>&copy; {new Date().getFullYear()} <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>YourJobSiteX</span>. All Rights Reserved.</span></p>
            </aside>
            <nav>
                <h6 className="footer-title">Job Categories</h6>
                <a className="link link-hover">All Jobs</a>
                <a className="link link-hover">Hybrid Jobs</a>
                <a className="link link-hover">Onsite Jobs</a>
                <a className="link link-hover">Remote Jobs</a>
                <a className="link link-hover">Part-time Jobs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Resources</h6>
                <a className="link link-hover">Resume Tips</a>
                <a className="link link-hover">Interview Preparation</a>
                <a className="link link-hover">Career Advice</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of Service</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Cookie Policy</a>
            </nav>
        </footer>
    );
};

export default Footer;
