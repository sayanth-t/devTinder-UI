import { useSelector } from 'react-redux';

const SideSection = ({ getMessage, selectedUser }) => {
 
  const connections = useSelector((state) => state.connections);

  const onlineUsers = useSelector((state)=> state.onlineUsers ) ;

  return (
    <aside className="h-screen  w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200 border-l-2" >
      <div className="border-b border-base-300 w-full p-5 max-lg:p-3">
        <div className="flex items-center">
          
          <span className="font-medium max-lg:text-xs">Connections</span>
        </div>
        
      </div>

      <div className="overflow-y-auto flex-1 py-2">
        { connections.length > 0 ? connections.map((user) => (
          <button
            key={user._id}
            onClick={() => getMessage(user) }
            className={`
            w-full hover:cursor-pointer p-3 flex items-center gap-3
            hover:bg-base-300 transition-colors
            ${
              selectedUser?._id === user._id
                ? 'bg-base-300 ring-1 ring-base-300'
                : ''
            }
          `}
          >
            <div className="relative mx-auto lg:mx-0">
              {
                user.avatarURL ? (<img
                src={user.avatarURL }
                alt={user.firsName}
                className="size-12 object-cover rounded-full"
              /> ): (<img src='https://res.cloudinary.com/dl8q6vzmq/image/upload/v1742800503/j8iajgjrnyzzqcjt2wwd.jpg ' alt={user.firsName} className="size-12 object-cover rounded-full"/>)
              }
              { onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-green-500 
                rounded-full ring-2 ring-zinc-900"
                />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{user.firstName} {user.lastName}</div>
              <div className="text-sm text-zinc-400">
                {
                  onlineUsers.includes(user._id) ? "Online" : "Offline"
                }
              </div>
            </div>
          </button>
        )) : (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-500 dark:text-gray-400 text-center max-lg:text-xs">No Connections yet!</p>
          </div>
        ) }

        
      </div>
    </aside>
  );
};

export default SideSection;
