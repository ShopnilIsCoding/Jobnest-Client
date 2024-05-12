
import { FaUser, FaLock, FaChevronRight, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import loginAnim from '../Lotties/login.json'
import Lottie from 'lottie-react';
function LoginForm() {
    return (
        <div className=" lg:min-h-[90vh] overflow-hidden" style={{backgroundImage: 'url(/loginbg2.png)',objectFit:'cover' ,backgroundPosition:'center',backgroundSize:'cover'}}>
  <div className=""></div>
  <div className="lg:my-6 w-fit mx-auto text-center text-neutral-content">
    <div className='flex items-center gap-3 lg:gap-0 flex-col lg:flex-row lg:border-2 rounded-lg overflow-hidden border-violet-500 hero-overlay  '>
        <div >
        <h1 className='text-5xl font-serif'>Login Now!</h1>
        <Lottie className='size-80 mx-auto' animationData={loginAnim} loop={true} />
        
        <p className='max-w-md font-serif'>Discover flexible job opportunities tailored to your needs. Whether you're seeking on-site, remote, hybrid, or part-time roles, <span className='font-meri'>JOBNEST</span> has you covered.</p>
        </div>
        <div>
        <div className="containerc opacity-60 lg:opacity-100">
            <div className="screen w-[300px] lg:w-[360px]">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <FaUser className="login__icon" />
                            <input type="text" className="login__input" placeholder="Email" />
                        </div>
                        <div className="login__field">
                            <FaLock className="login__icon" />
                            <input type="password" className="login__input" placeholder="Password" />
                        </div>
                        <button className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <FaChevronRight className="button__icon" />
                        </button>				
                    </form>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <a href="#" className="social-login__icon"><FaInstagram /></a>
                            <a href="#" className="social-login__icon"><FaFacebook /></a>
                            <a href="#" className="social-login__icon"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>		
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>		
            </div>
        </div>
        </div>

    </div>
  </div>
</div>
    );
}

export default LoginForm;
