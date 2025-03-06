
const UserCardShimmer = () => {

    return (
        <section className="min-h-screen w-full flex justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <div className="shimmer w-full h-48"></div>
          </figure>
          <div className="card-body">
            <div className="card-title text-2xl font-bold">
              <h2 className="shimmer w-3/4 h-6 mb-2"></h2>
              <h2 className="shimmer w-1/2 h-6"></h2>
            </div>
            <div className="text-md text-slate-500 font-bold">
              <h4 className="shimmer w-1/2 h-4"></h4>
            </div>
            <div>
              <p className="shimmer w-full h-4 mb-2"></p>
              <p className="shimmer w-full h-4 mb-2"></p>
              <p className="shimmer w-3/4 h-4"></p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn  shimmer w-20 h-10"></button>
              <button className="btn shimmer w-20 h-10"></button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default UserCardShimmer;
  