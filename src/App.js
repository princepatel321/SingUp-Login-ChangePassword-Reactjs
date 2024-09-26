import './App.css';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Singup from './Singup';
import Login from './Login';
import Homepage from './Homepage';
import Password from './Password';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/Singup">Singup</Link> |
        <Link to="/Login">Login</Link> |
        <Link to="/Homepage">Homepage</Link> |
        <Link to="/Password">Password</Link> 

        <Routes>
          <Route path="/Singup" element={<Singup/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Homepage" element={<Homepage/>}/>
          <Route path="/Password" element={<Password/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
