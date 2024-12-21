import bgPic from '../assets/backgroundPic.png';
import gpic from '../assets/google.png';
import fpic from '../assets/facebook.png';
import profile from '../assets/profile.png';
import mail from '../assets/email.png';
import secret from '../assets/password.png';
import eye from '../assets/preview.png';
import '../styles/login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validateInputs = () => {
        let tempErrors = {};

        if (username !== "emilys") {
            tempErrors.username = "Username must be 'emilys'.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            tempErrors.email = "Invalid email format.";
        }

        if (password.length < 8) {
            tempErrors.password = "Password must be at least 8 characters.";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (validateInputs()) {
          const userData = { username, email, password };
          const users = JSON.parse(localStorage.getItem("users")) || [];
          users.push(userData);
          localStorage.setItem("users", JSON.stringify(users));
          navigate("/home");
        }
      };

    return(
        <div className="main-container">
            <div className='bg-container'>
               <img id="backG" src={bgPic} alt="backgroundPic"/>
            </div>
            <form className='login-card' onSubmit={handleLogin}>
                <h3>Welcome to</h3>
                <span id="unstops">Unstop</span>

                <div id="guglee">
                    <img id="G" src={gpic} alt="googlepng"/>Login with Google
                </div>
                <div id="facebookee">
                    <img id="fb" src={fpic} alt="googlepng"/>Login with Facebook
                </div>

                <div className='divider'><hr/><span>OR</span><hr/></div>

                <div className='input-container'>
                    <div className='input-box'>
                        <img className='icons' src={profile} alt="userIcon"/>
                        <div className='input-info'>
                            <label htmlFor="username">User Name</label>
                            <input type='text' 
                                   id="username"
                                   value={username}
                                   onChange={(e)=>{setUsername(e.target.value)
                                    if (errors.username) setErrors((prev) => ({ ...prev, username: '' }));
                                    validateInputs();
                                   }}
                            />
                            {errors.username && <p className='error-message'>{errors.username}</p>}
                        </div>
                    </div>

                    <div className='input-box'>
                        <img className='icons' src={mail} alt="mailIcon"/>
                        <div className='input-info'>
                            <label id="m" htmlFor="email">Email</label>
                            <input type='mail' 
                                   id="email"
                                   value={email}
                                   onChange={(e)=>{
                                    setEmail(e.target.value)
                                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                                    validateInputs();
                                   }}
                            />
                            {errors.email && <p className='error-message'>{errors.email}</p>}
                        </div>
                    </div>

                    <div className='input-box'>
                        <img className='icons' src={secret} alt="psswrdIcon"/>
                        <div className='input-info'>
                            <label htmlFor="password">Password</label>
                            <input type={showPassword ? 'text' : 'password'} 
                                   id="password"
                                   value={password}
                                   onChange={(e)=>{setPassword(e.target.value)
                                                   if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
                                                   validateInputs();
                                   }}
                            />
                            {errors.password && <p className='error-message'>{errors.password}</p>}
                        </div>
                        <img className='icons' onClick={()=>setShowPassword(!showPassword)} src={eye} alt="previewIcon"/>
                    </div>
                </div>

                <div className="auth-container">
                    <div className="auth-options">
                        <label className="remember-me">
                        <input type="checkbox" />
                        <span id="rm">Remember.Me</span>
                        </label>
                        <a href="#" className="forgot-password" onClick={()=>window.location.reload()}>Forgot Password?</a>
                    </div>
                </div>

                <button type="submit" id="loginBtn">Login</button>

                <div className='register'>
                    <span>Don't have an account?</span>
                    <a href='#'>Register</a>
                </div>
            </form>
        </div>
    );
}
export default Login;