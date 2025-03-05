import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed, removeFeedUser } from '../utils/feedSlice';
import UserCard from './userCard';
import { addRequests } from '../utils/requestsSlice';


const Feed = () => {
  const feedData = useSelector((state) => state.feed);
  const dispatch = useDispatch();

  const sendConnection = async (status, toUserId) => {
    await axios.post(
      'http://localhost:3000/request/send/' + status + '/' + toUserId,
      {},
      { withCredentials: true }
    );
    dispatch(removeFeedUser(toUserId));
  };

  // for fetching requests
  const fetchRequests = async () => {
    try {
      console.log('fething requestsss.......');
      const res = await axios.get(
        'http://localhost:3000/user/request/recieved',
        { withCredentials: true }
      );
      dispatch(addRequests(res.data.requests));
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchFeed = async () => {
    try {
      if (feedData.length > 0) return;

      const res = await axios.get('http://localhost:3000/feed?page=1', {
        withCredentials: true,
      });

      dispatch(addFeed(res?.data?.feedUsers));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchFeed();
    fetchRequests();
  }, []);

  const feedUsers = Array.from(feedData || []);

  return (
    <div>
      {feedUsers.length === 0 ? (
        <div className="lg:min-h-screen flex justify-center items-center">
          <h2>No Feed Data</h2>
        </div>
      ) : (
     
          <div>
            <UserCard feedUser={feedUsers[0]} sendRequest={sendConnection} />
          </div>
  
      )}
    </div>
  );
};

export default Feed;
