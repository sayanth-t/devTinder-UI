import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';

const Header = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch() ;

  const navigate = useNavigate() ;

  const handleLogOut = async () => {
    try {
      await axios.post( 'http://localhost:3000/logout' ,{} ,
        { withCredentials : true }
    )

    dispatch(removeUser()) ;

    navigate('/login')

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="navbar bg-base-100 fixed z-10 lg:px-20 shadow-lg">
      <div className="flex-1">
        <Link to={'/'} className="btn btn-ghost text-xl">devTinder</Link>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />

        {user && (
          <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
           
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.avatarURL}
                />
              </div>
          
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={'/profile'} className="justify-between">
                 { user.firstName }
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
