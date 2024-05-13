
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';

const Banner = () => {
    const handleNext = () => {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
      };
    
      const handlePrev = () => {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]); 
      };
    
      return (
        <div className='container'>
            <div className="containerslide h-[80vh]">
          <div className="slide">
           
            <div className="item absolute shadow-xl shadow-base-300" style={{backgroundImage: "url(https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
              <div className="content lg:max-w-lg max-w-[45%] left-1 lg:z-0  rounded-lg  lg:left-5">
                <div className="name text-lg lg:text-3xl font-meri">On-Site Opportunities</div>
                <div className="des font-serif">Discover job roles that require your presence in-office for a collaborative work environment and direct interaction with colleagues.</div>
                <button className='btn btn-accent'>See More</button>
              </div>
            </div>
            <div className="item absolute shadow-xl shadow-base-300" style={{backgroundImage: "url(https://images.unsplash.com/photo-1474403078171-7f199e9d1335?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
              <div className="content lg:max-w-lg max-w-[45%] left-1 lg:z-0  rounded-lg  lg:left-5">
                <div className="name text-lg lg:text-3xl font-meri">Remote Roles</div>
                <div className="des font-serif">Explore flexible job opportunities that allow you to work from anywhere, providing freedom and autonomy in your work life.</div>
                <button className='btn btn-accent'>See More</button>
              </div>
            </div>
            <div className="item absolute shadow-xl shadow-base-300" style={{backgroundImage: "url(https://images.unsplash.com/photo-1499914567823-c240485cb7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
              <div className="content lg:max-w-lg max-w-[45%] left-1 lg:z-0  rounded-lg  lg:left-5">
                <div className="name text-lg lg:text-3xl font-meri">Hybrid Workstyles</div>
                <div className="des font-serif">Find roles that offer a blend of remote and in-office work, catering to both flexibility and the benefits of face-to-face collaboration.</div>
                <button className='btn btn-accent'>See More</button>
              </div>
            </div>
            <div className="item absolute shadow-xl shadow-base-300" style={{backgroundImage: "url(https://images.unsplash.com/photo-1506452819137-0422416856b8?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
              <div className="content lg:max-w-lg max-w-[45%] left-1 lg:z-0  rounded-lg  lg:left-5">
                <div className="name text-lg lg:text-3xl font-meri">Part-Time Positions</div>
                <div className="des font-serif">Explore job opportunities that offer reduced hours, allowing you to maintain a balance between work, personal commitments, and leisure activities.</div>
                <button className='btn btn-accent'>See More</button>
              </div>
            </div>
           
          </div>
          <div className="buttonslide text-4xl text-violet-300">
            <button className="prev btn-outline border-2 border-accent btn-accent" onClick={handlePrev}><BiSkipPrevious></BiSkipPrevious></button>
            <button className="next btn-outline border-2 border-accent btn-accent" onClick={handleNext}><BiSkipNext></BiSkipNext></button>
          </div>
        </div>
        </div>
      );
};


export default Banner;
// ReactDOM.render(<Banner slides={slides} />, document.querySelector('#app'));
