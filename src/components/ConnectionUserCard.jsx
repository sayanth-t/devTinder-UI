import { HiOutlineChatAlt, HiOutlineUserRemove } from 'react-icons/hi'; 

const ConnectionUserCard = ({ user }) => {
  const { firstName, lastName, age, about, avatarURL } = user;

  return (
 
    <div
      role="button"
      className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 hover:cursor-pointer"
    >
      <div className="mr-4 flex-shrink-0">
        <img
          alt={`${firstName}'s Avatar`}
          src={user.avatarURL} // Fallback image
          className="h-12 w-12 rounded-full object-cover object-center"
        />
      </div>
      <div className="flex-1 flex-row justify-around ">
        <h6 className="text-slate-800 font-medium">
          {firstName} , {lastName}
        </h6>
        <p className="text-slate-500 text-sm">{age}</p>
        <p className="text-slate-500 text-sm">{about}</p>
      </div>
      <div className="flex items-center gap-3">
        {/* Message Icon */}
        <button
          className="p-2 text-slate-500 hover:text-slate-700 focus:outline-none hover:cursor-pointer" 
          aria-label="Message"
          onClick={() => console.log(`Message ${firstName}`)}
        >
          <HiOutlineChatAlt className="h-5 w-5" />
        </button>

        {/* Unfollow Icon */}
        <button
          className="p-2 text-slate-500 hover:text-red-500 focus:outline-none hover:cursor-pointer"
          aria-label="Unfollow"
          onClick={() => console.log(`Unfollow ${firstName}`)}
        >
          <HiOutlineUserRemove className="h-5 w-5" />
        </button>
      </div>
    </div>

    
  );
};

export default ConnectionUserCard;
