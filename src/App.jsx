import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';

import appStore from './utils/store.js';
import { Provider } from 'react-redux';
import Feed from './components/Feed.jsx';

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feed />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
