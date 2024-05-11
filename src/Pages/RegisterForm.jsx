
import { FaUser, FaEnvelope, FaLock, FaImage, FaChevronRight} from 'react-icons/fa';
import Lottie from 'lottie-react';
import registerAnim from '../Lotties/register.json';

function RegisterForm() {
    return (
        <div className="hero min-h-[90vh] overflow-hidden" style={{backgroundImage: 'url(/register.png)',objectFit:'cover' ,backgroundPosition:'center',background:'cover'}}>
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='flex items-center flex-col lg:flex-row border-2 rounded-lg overflow-hidden border-violet-500 hero-overlay opacity-90 '>
                    <div >
                        <h1 className='text-5xl font-serif'>Register Now!</h1>
                        <Lottie className='size-80 mx-auto' animationData={registerAnim} loop={true} />
                        <p className='max-w-md font-serif'>Create an account to access personalized job opportunities. Join <span className='font-meri'>JOBNEST</span> today!</p>
                    </div>
                    <div>
                        <div className="containerc ">
                            <div className="screen w-[300px] lg:w-[360px] flex justify-center items-center">
                                <div className="screen__content flex flex-col items-center justify-center">
                                    <form className="register">
                                        <div className="login__field">
                                            <FaUser className="login__icon" />
                                            <input type="text" className="login__input" placeholder="Name" />
                                        </div>
                                        <div className="login__field">
                                            <FaEnvelope className="login__icon" />
                                            <input type="email" className="login__input" placeholder="Email" />
                                        </div>
                                        <div className="login__field">
                                            <FaLock className="login__icon" />
                                            <input type="password" className="login__input" placeholder="Password" />
                                        </div>
                                        <div className="login__field">
                                            <FaImage className="login__icon" />
                                            <input type="text" className="login__input" placeholder="Photo URL" />
                                        </div>
                                        <button className="button login__submit">
                                            <span className="button__text">Register Now</span>
                                            <FaChevronRight className="button__icon" />
                                        </button>
                                    </form>
                                    
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

export default RegisterForm;
