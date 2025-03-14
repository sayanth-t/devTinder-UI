import { useDispatch, useSelector } from 'react-redux';
import ConnectionUserCard from './ConnectionUserCard';
import { removeUserConnection } from '../utils/connectionsSlice';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';


const Connections = () => {
  const connections = useSelector((state) => state.connections);
  const dispatch = useDispatch()

  const removeUser = async (userId) => {
    try {
      
      dispatch(removeUserConnection(userId)) ;

      // making API call to remove the user from backend
      const res = await axios.post("http://localhost:3000/request/ignore/"+userId,{},{withCredentials:true}) ;
      console.log(res.data) 
      toast.success(res.data.message) 
    } catch (err) {
      console.log(err.message)
    }
  }

  if (connections.length === 0) {
    return (
      <div className="lg:min-h-screen flex justify-center items-center">
        <h1 className="text-center">No Connections</h1>
      </div>
    );
  }

  const connectionList = Array.from(connections);


  return (
    <div className="lg:min-h-screen flex-col">
      <div>
        {/* <h2 >Connections</h2> */}
      </div>
      <div className="min-h-96 lg:min-h-screen flex flex-col gap-3 justify-center items-center p-4">
        { 
          connectionList.map((user) => (
            <div
              key={user._id}
              className="max-md:max-w-md max-lg:max-w-lg w-full max-w-4xl rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <ConnectionUserCard user={user} removeUserConnection={removeUser}  />
            </div>
          ))
        }
      </div>

      <ToastContainer/>
    </div>
  );
};

export default Connections;
