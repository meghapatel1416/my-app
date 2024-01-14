import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './Home';

function App() {
  return (
    <div className="App">
      <Link to="/">Login</Link>
     <Routes>
     <Route path="/" element={<Login />}>
     </Route> 
     <Route path="/home" element={<Home />}>
     </Route> 
     <Route />
     </Routes>
    </div>
  );
}

export default App;
