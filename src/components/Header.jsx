import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';
import { IoMdNotificationsOutline } from 'react-icons/io';

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
      dispatch(removeUser());
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  
  const requests = useSelector((state)=> state?.requests ) ;

  const requestsCount = requests &&  Array.from(requests).length

  return (
    <div className="navbar bg-base-100 fixed z-10 lg:px-20 shadow-lg">
      <div className="flex-1">
        <Link to={'/feed'} className="btn btn-ghost text-xl">
          devTinder
        </Link>
      </div>

      <div className="flex gap-8 items-center">
        {/* Notification Icon with Count */}
        <div className="relative">
          <Link to={'/requests'}>
            <IoMdNotificationsOutline className="h-8 w-8 text-gray-700 cursor-pointer" />
          </Link>
           { requestsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {requestsCount}
            </span>
          )}
        </div>

        {/* User Avatar Dropdown */}
        {user && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.avatarURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={'/profile'} className="justify-between">
                  {user.firstName}
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;