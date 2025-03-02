const UserCard = ({ feedUser }) => {


  return (
    <section className="min-h-screen w-full flex justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{ feedUser[0]?.firstName + " " + feedUser[0]?.lastName }</h2>
          <h4 className="text-md text-slate-500 font-bold ">{feedUser[0]?.age}</h4>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
