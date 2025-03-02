import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './userCard';


const Feed = () => {

  const feedData = useSelector((state) => state.feed);
  const dispatch = useDispatch();

  const fetchFeed = async () => {
    try {
      if(feedData.length > 0) return 

      const res = await axios.get('http://localhost:3000/feed?page=1', {
        withCredentials: true,
      });
  
      dispatch(addFeed(res?.data?.feedUsers));
    } catch (error) {
        console.log(error.message)
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  console.log(feedData)


  return <div>{
    feedData.length > 0 && <UserCard feedUser={feedData}/>}</div>;
};

export default Feed;
