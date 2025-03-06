import { useSelector } from 'react-redux';
import ConnectionUserCard from './ConnectionUserCard';


const Connections = () => {
  const connections = useSelector((state) => state.connections);

  if (connections.length === 0) {
    return (
      <div className="lg:min-h-screen flex justify-center items-center">
        <h1 className="text-center">No Connections</h1>
      </div>
    );
  }

  const connectionList = Array.from(connections);
  console.log(connectionList);

  return (
    <div className="lg:min-h-screen flex-col">
      <div>
        <h2>Connections</h2>
      </div>
      <div className="min-h-96 lg:min-h-screen flex flex-col gap-3 justify-center items-center p-4">
        { 
          connectionList.map((user) => (
            <div
              key={user._id}
              className="max-md:max-w-md max-lg:max-w-lg w-full max-w-4xl rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <ConnectionUserCard user={user}  />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Connections;
