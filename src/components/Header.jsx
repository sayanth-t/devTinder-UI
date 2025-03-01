import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.user);

  console.log('user -- ', user);
  return (
    <div className="navbar bg-base-100  lg:px-20 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">devTinder</a>
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
              <a className="justify-between">
                 { user.firstName }
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        )}

      </div>
    </div>
  );
};

export default Header;
