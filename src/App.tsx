import React from 'react';
import './App.css';
import SignIn from "./components/SignIn/SignIn"
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile'
function App() {

  return (
    <div className="App">
      <Router>
       <Routes>
       <Route path='/' element={<SignUp/>} />
       <Route path='/SignIn' element={<SignIn/>} />
       <Route path='/SignUp' element={<SignUp />} />
       <Route path='/profile' element={<Profile />} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
