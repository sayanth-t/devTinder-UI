const RequestUserCard = ({ request }) => {
  const { firstName, lastName, age, avatarURL, about } = request?.fromUserId;

  return (
    <div
      role="button"
      className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 hover:cursor-pointer"
    >
      <div className="mr-4 flex-shrink-0">
        <img
          alt={`${firstName}'s Avatar`}
          src={avatarURL} // Fallback image
          className="h-12 w-12 rounded-full object-cover object-center"
        />
      </div>
      <div className="flex-1 flex-row justify-around ">
        <h6 className="text-slate-800 font-medium">
          {firstName} , {lastName}
        </h6>
        <p className="text-slate-500 text-sm">{age}</p>
        <p className="text-slate-500 text-sm lg:max-w-lg">{about}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="card-actions flex flex-col sm:flex-row justify-center sm:justify-end gap-2 sm:gap-4">
          <button className="btn btn-primary w-full sm:w-auto hover:bg-blue-600 transition-colors rounded-lg shadow-md">
            Accept
          </button>
          <button className="btn btn-primary w-full sm:w-auto hover:bg-blue-600 transition-colors rounded-lg shadow-md">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestUserCard;
