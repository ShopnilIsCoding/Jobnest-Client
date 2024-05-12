
import { FaUser, FaEnvelope, FaLock, FaImage, FaChevronRight} from 'react-icons/fa';
import Lottie from 'lottie-react';
import registerAnim from '../Lotties/register.json';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

function RegisterForm() {
    const {user,createUser,updateUserProfile} =useContext(AuthContext);
    const navigate=useNavigate();
    if(user)
        {
            setTimeout(()=>navigate('/'),3000);
            return;
        }

    const handleRegister=(e)=>
        {
            e.preventDefault();
            const form = new FormData(e.currentTarget)
            const email=form.get('email');
            const password=form.get('password');
            const name=form.get('name');
            const photo=form.get('photo');
            //const newUser={email,password,name,photo};
            
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
            if (!passwordRegex.test(password)) {
                toast.warning('Password must be at least 6 characters and contain at least one uppercase and one lowercase letter.');
                return;
              }
    
              createUser(email,password)
            .then(res=>{console.log(res.user)
                Swal.fire({
                    title: "Greetings!",
                    text: "Successfully Registered!",
                    icon: "success"
                  });
              updateUserProfile(name,photo)
              .then(()=>{
                setTimeout(()=>window.location.reload(),2000)
                
                 
                 
    
              })
              navigate('/');
               
            })
            .catch(err=>{console.error(err)})
        }




    return (
        <div className=" lg:min-h-[90vh] overflow-hidden" style={{backgroundImage: 'url(/register.png)',objectFit:'cover' ,backgroundPosition:'center',backgroundSize:"cover"}}>
            <div className=""></div>
            <div className="lg:my-6  w-fit mx-auto text-center text-neutral-content">
                <div className='flex items-center flex-col gap-3 lg:gap-0 lg:flex-row lg:border-2 rounded-lg overflow-hidden border-violet-500 hero-overlay  '>
                    <div >
                        <h1 className='text-5xl font-serif'>Register Now!</h1>
                        <Lottie className='size-80 mx-auto' animationData={registerAnim} loop={true} />
                        <p className='max-w-md font-serif'>Create an account to access personalized job opportunities. Join <span className='font-meri'>JOBNEST</span> today!</p>
                    </div>
                    <div>
                        <div className="containerc opacity-80 lg:opacity-100">
                            <div className="screen w-[300px] lg:w-[360px] flex justify-center items-center">
                                <div className="screen__content flex flex-col items-center justify-center">
                                    <form className="register" onSubmit={handleRegister}>
                                        <div className="login__field">
                                            <FaUser className="login__icon" />
                                            <input type="text" name='name' className="login__input" placeholder="Name" required/>
                                        </div>
                                        <div className="login__field">
                                            <FaEnvelope className="login__icon" />
                                            <input type="email" name='email' className="login__input" placeholder="Email" required/>
                                        </div>
                                        <div className="login__field">
                                            <FaLock className="login__icon" />
                                            <input type="password" name='password' className="login__input" placeholder="Password" required/>
                                        </div>
                                        <div className="login__field">
                                            <FaImage className="login__icon" />
                                            <input type="text" name='photo' className="login__input" placeholder="Photo URL" required/>
                                        </div>
                                        <button className="button login__submit">
                                            <span className="button__text">Register Now</span>
                                            <FaChevronRight className="button__icon" />
                                        </button>
                                    </form>
                                    
                                </div>
                                <div className="screen__background">
                                    <span className="screen__background__shape screen__background__shape4 glass bg-primary"></span>
                                    <span className="screen__background__shape screen__background__shape3"></span>		
                                    <span className="screen__background__shape screen__background__shape2"></span>
                                    <span className="screen__background__shape screen__background__shape1 glass "></span>
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
