import { FiHome, FiSearch, FiBell, FiStar } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div className='container mx-auto nav flex items-center bg-gradient-to-b from-black via-gray-700 to-gray-900 shadow-md py-2'>
            <div>
                <img className='size-24 rounded-full' src='/logo.jpg' alt="" />
            </div>
            <nav className="menu max-w-fit mx-auto" id="nav">
      <span className="nav-item active">
        <span className="icon">
          <FiHome />
        </span>
        <a href="#">Home</a>
      </span>
      <span className="nav-item ">
        <span className="icon">
          <FiSearch />
        </span>
        <a href="#">All Jobs</a>
      </span>
      <span className="nav-item">
        <span className="icon">
          <span className="subicon">13</span>
          <FiBell />
        </span>
        <a href="#">Applied Jobs</a>
      </span>
      <span className="nav-item">
        <span className="icon">
          <FiStar />
        </span>
        <a href="#">Favorites</a>
      </span>
      <span className="nav-item">
        <span className="icon">
          <span className="subicon">1</span>
          <FiBell />
        </span>
        <a href="#">Your Profile</a>
      </span>
    </nav>
        </div>
    );
};

export default Navbar;