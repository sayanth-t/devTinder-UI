import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { removeFeed } from '../utils/feedSlice';
import { removeRequests } from '../utils/requestsSlice';

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await axios.post(
        'http://localhost:3000/logout',
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      dispatch(removeFeed());
      dispatch(removeRequests());
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  const requests = useSelector((state) => state?.requests);

  const requestsCount = requests && Array.from(requests).length;

  return (
    <div className="navbar fixed z-10 lg:px-20 ">
      <div className="flex-1 text-white">
        <Link to={'/feed'} className="text-xl font-bold">
          <img className='w-21' src="Leonardo_Phoenix_09_A_modern_sleek_and_vibrant_logo_for_devTin_3.png" alt="devTinder" />
        </Link>
      </div>

      <div className="flex gap-8 items-center">
        {/* Notification Icon with Count */}
        {user && (
          <div className="relative">
            <Link to={'/requests'}>
              <IoMdNotificationsOutline className="h-8 w-8 text-gray-700 cursor-pointer" />
            </Link>
            {requestsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {requestsCount}
              </span>
            )}
          </div>
        )}

        {/* User Avatar Dropdown */}
        {user && (
          <div className="dropdown dropdown-end">
            <Link to={'/profile'}>
              <div className="flex flex-row justify-center items-center gap-2 hover:cursor-pointer">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="User Avatar" src={user.avatarURL} />
                  </div>
                </div>
                <div>
                  <p>{user.firstName}</p>
                </div>
              </div>
            </Link>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100/90 backdrop-blur-lg rounded-box z-1 mt-3 w-52 p-2 shadow-lg transform transition-all duration-300 ease-in-out origin-top scale-0 dropdown-open:scale-100"
            >
              <li>
                <Link
                  to={'/profile'}
                  className="justify-between hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 rounded-lg"
                >
                  {user.firstName}
                </Link>
              </li>
              <li>
                <a className="hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 rounded-lg">
                  Settings
                </a>
              </li>
              <li>
                <a
                  onClick={handleLogOut}
                  className="hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 rounded-lg"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
