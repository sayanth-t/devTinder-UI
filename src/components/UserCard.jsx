
const UserCard = ({ feedUser , sendRequest }) => {

  const {_id,firstName,lastName,age,avatarURL,about} = feedUser 

  return (
    <section className="min-h-screen w-full flex justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={avatarURL}
            alt="UserImg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{ firstName + " " + lastName }</h2>
          <h4 className="text-md text-slate-500 font-bold ">{age}</h4>
          <p>
           {about}
          </p>
          <div className="card-actions justify-end">
            <button onClick={()=>sendRequest("interested",_id)} className="btn btn-primary">Interested</button>
            <button onClick={()=>sendRequest("ignored",_id)} className="btn btn-primary">Ignore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
