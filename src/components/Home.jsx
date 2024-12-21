import '../styles/home.css';
import profile from'../assets/profile-pic.png';
import { useNavigate } from 'react-router-dom';
function Home(){

    const navigate=useNavigate();
    const users=JSON.parse(localStorage.getItem('users'))||[];

    const handleLogout=()=>{
        localStorage.removeItem("users");
        navigate("/auth/login");
    }
    return(
        <div className="container">
            <h1>Welcome to</h1>
            <span id="unstop">Unstop</span>
            <div className='card'>
                <img src={profile} alt="profile-pic"/>
                <span id="name">{users[0].username}</span>
                <span id="gmail">{users[0].email}</span>
                <span>Female</span>
                <button  onClick={handleLogout} className="logoutbtn">Logout</button>
            </div>
        </div>
    )
}
export default Home;