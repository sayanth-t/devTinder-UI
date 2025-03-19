import { useSelector } from 'react-redux';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import formatTime from '../utils/formatTime';

const ChatContainer = () => {
  const messages = useSelector((state) => state.message);

  const selectedUser = useSelector((state) => state.selectedUser);
  const user = useSelector((state) => state.user);

  return (
    <div className="flex-1 flex flex-col  overflow-y-auto h-[calc(100vh-4rem)]">
      <ChatHeader />

      {messages.length > 0 ? (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message._id}
              className={`chat  ${
                message.senderId === user._id ? 'chat-end' : 'chat-start'
              }`}
            >
              <div className="chat-image avatar">
                <div className="size-10 rounded-full border">
                  <img
                    src={
                      message.senderId === user._id
                        ? user.avatarURL || '/avatar.png'
                        : selectedUser.avatarURL || '/avatar.png'
                    }
                    alt="profile pic"
                  />
                </div>
              </div>
              <div className="chat-header mb-1">
                <time className="text-xs opacity-50 ml-1">
                  {formatTime(message.createdAt)}
                </time>
              </div>
              <div className="chat-bubble flex flex-col">
                {message.image && (
                  <img
                    src={message.image}
                    alt="Attachment"
                    className="sm:max-w-[200px] rounded-md mb-2"
                  />
                )}
                {message.text && <p>{message.text}</p>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-400">
          Start coversation
        </div>
      ) }

      
       <div className='sticky bottom-0'>
         <MessageInput /> 
       </div>
     
    </div>
  );
};

export default ChatContainer;
