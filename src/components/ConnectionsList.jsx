import { useSelector } from "react-redux";
import UserChatCard from "./UserChatCard";

const ConnectionsList = ({ getMessage }) => {
  const connections = useSelector((state) => state.connections);

  return (
    <div className="w-1/3 h-full bg-white shadow-md overflow-y-auto p-4">
      {connections.map((user) => (
        <div
          key={user._id}
          onClick={() => getMessage(user._id)}
          className="cursor-pointer hover:bg-gray-200 p-2 rounded-md"
        >
          <UserChatCard user={user} />
        </div>
      ))}
    </div>
  );
};

export default ConnectionsList;