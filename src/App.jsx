import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
function App(){
  return(
    <Router>
      <Routes>
        <Route
           path='/auth/login'
           element={<Login/>}
        />
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </Router>
  );
}
export default App;