const UserChatCard = ({ user }) => {
  const { firstName, lastName, avatarURL } = user;
  return (
    <div className="flex items-center bg-white shadow-sm p-3 rounded-lg w-full border border-gray-200">
      <figure className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
        <img src={avatarURL} alt="User" className="w-full h-full object-cover" />
      </figure>
      <div className="ml-3 flex-1">
        <h2 className="font-semibold text-lg text-gray-900">
          {firstName} {lastName}
        </h2>
        <p className="text-sm text-green-500">Online</p>
      </div>
    </div>
  );
};

export default UserChatCard;