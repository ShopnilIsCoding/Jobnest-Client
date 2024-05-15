import {
  FaUser,
  FaLock,
  FaChevronRight,
  FaGoogle,
} from "react-icons/fa";
import loginAnim from "../Lotties/login.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
function LoginForm() {
  const {user, signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  if(user)
    {
        setTimeout(()=>navigate('/'),3000);
        return;
    }
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Welcome Back",
          text: "Successfully logged in!",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials!",
          text: "Please provide a valid credentials",
        });
      });
  };
  return (
    <div
      className=" lg:min-h-[90vh] overflow-hidden"
      style={{
        backgroundImage: "url(/loginbg2.png)",
        objectFit: "cover",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className=""></div>
      <div className="lg:my-6 w-fit mx-auto text-center text-neutral-content">
        <div className="flex items-center gap-3 lg:gap-0 flex-col lg:flex-row lg:border-2 rounded-lg overflow-hidden border-violet-500 hero-overlay  ">
          <div>
            <h1 className="text-5xl font-serif">Login Now!</h1>
            <Lottie
              className="size-80 mx-auto"
              animationData={loginAnim}
              loop={true}
            />

            <p className="max-w-md font-serif ">
              Discover flexible job opportunities tailored to your needs.
              Whether you're seeking on-site, remote, hybrid, or part-time
              roles, <span className="font-meri">JOBNEST</span> has you covered.
            </p>
            <p className="font-elec">Don't have an Account?<Link to={'/register'} className="btn-link text-blue-400 ml-1 ">Register Now!</Link></p>
          </div>
          <div>
            <div className="containerc opacity-80 lg:opacity-100">
              <div className="screen w-[300px] lg:w-[360px]">
                <div className="screen__content">
                  <form className="login" onSubmit={handleLogin}>
                    <div className="login__field">
                      <FaUser className="login__icon" />
                      <input
                        type="text"
                        className="login__input"
                        placeholder="Email"
                      />
                    </div>
                    <div className="login__field">
                      <FaLock className="login__icon" />
                      <input
                        type="password"
                        className="login__input"
                        placeholder="Password"
                      />
                    </div>
                    <button className="button login__submit">
                      <span className="button__text ">Log In Now</span>
                      <FaChevronRight className="button__icon" />
                    </button>
                  </form>
                  <div className="social-login">
                    <h3 className="font-meri ">log in via</h3>
                    <div className="social-icons">
                      <a
                        onClick={() =>
                          googleLogin().then(() => {
                            Swal.fire({
                              title: "Welcome Back!",
                              text: "Successfully logged in!",
                              icon: "success",
                            });
                            navigate(location?.state ? location.state : "/");
                          })
                        }
                        className="social-login__icon cursor-pointer flex justify-center items-center "
                      >
                        <FaGoogle className="text-info" /><span className="google-text-gradient">oogle</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="screen__background">
                  <span className="screen__background__shape screen__background__shape4 glass bg-base-300"></span>
                  <span className="screen__background__shape screen__background__shape3"></span>
                  <span className="screen__background__shape screen__background__shape2"></span>
                  <span className="screen__background__shape screen__background__shape1  "></span>
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
