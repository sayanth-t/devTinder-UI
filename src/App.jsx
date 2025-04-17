import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';

import appStore from './utils/store.js';
import { Provider } from 'react-redux';
import Feed from './components/Feed.jsx';
import Connections from './components/Connections.jsx';
import Requests from './components/Requests.jsx';
import SignupEmailVerify from './components/SignupEmailVerify.jsx';
import SignupPassword from './components/SignupPassword.jsx';
import SkillsAndProfile from './components/SkillsAndProfile.jsx';

function App() {
  
  return (
    <Provider store={appStore}>
      <Router >
        <Routes>
          <Route path="/" element={<Body />}>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/signup/verify-emailId' element={<SignupEmailVerify/>} />
            <Route path='/signup/password' element={<SignupPassword/>} />
            <Route path='/signup/profileSetup' element={<SkillsAndProfile/>}/>

            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
            
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
