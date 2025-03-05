import { useDispatch, useSelector } from 'react-redux';
import RequestUserCard from './RequestUserCard';
import axios from 'axios';
import { removeRequest } from '../utils/requestsSlice';

const Requests = () => {
  const requests = useSelector((state) => state?.requests) ;

  const dispatch = useDispatch()

    //review request
    const reviewRequest = async (status,requestId) => {

        console.log('review request ... ')
        await axios.post("http://localhost:3000/request/review/"+status+"/"+requestId,{},{withCredentials:true}) ;

        dispatch(removeRequest(requestId)) ;
    }

  if (!requests) return;

  const pendingRequests = Array.from(requests || []);

  return (
    <div className="lg:min-h-screen flex justify-center items-center">
      { pendingRequests.length === 0 ? (
        <div>
            <h2>No Requests</h2>
        </div>
      ) : (
        pendingRequests.map((request) => (
          <div key={request._id}>
            <RequestUserCard request={request} reviewRequest={reviewRequest} />
          </div>
        ))
      )}
    </div>
  );
};

export default Requests;
