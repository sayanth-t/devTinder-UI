import { useSelector } from "react-redux";
const ChatHeader = () => {
  const selectedUser = useSelector(state => state.selectedUser ) ;

  const onlineUsers = useSelector((state) => state.onlineUsers ) ;
 
  const { _id , firstName ,  avatarURL } = selectedUser
    return (
      <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full relative">
            {
                avatarURL ? (<img
                src={avatarURL }
                alt={firstName}
                className="size-12 object-cover rounded-full"
              /> ): (<img src='https://res.cloudinary.com/dl8q6vzmq/image/upload/v1742800503/j8iajgjrnyzzqcjt2wwd.jpg ' alt={firstName} className="size-12 object-cover rounded-full"/>)
              }
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-medium">{ firstName }</h3>
            <p className="text-sm text-base-content/70">
             {
              onlineUsers.includes(_id) ? "online" : "offline"
             }
            </p>
          </div>
        </div>

        {/* Close button */}
        {/* <button onClick={() => console.log('close button  clicked')}>
          <X />
        </button> */}
      </div>
    </div>
    );
}

export default ChatHeader;
