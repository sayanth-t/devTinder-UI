import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed, removeFeedUser } from '../utils/feedSlice';
import UserCard from './userCard';
import { addRequests } from '../utils/requestsSlice';
import UserCardShimmer from './shimmer/UserCardShimmer';
import SideSection from './SideSection';
import SideSectionShimmer from './shimmer/SideSectionShimmer';
import { addConnections } from '../utils/connectionsSlice';
import {  addSelectedUser } from '../utils/SelectedUserSlice';
import { addMessages } from '../utils/messageSlice';


const Feed = () => {
  const feedData = useSelector((state) => state.feed );
  const selectedUser = useSelector((state)=> state.selectedChat ) ;
  
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
      
      const res = await axios.get(
        'http://localhost:3000/user/request/recieved',
        { withCredentials: true }
      );
      dispatch(addRequests(res.data.requests));
    } catch (err) {
      console.log(err.message);
    }
  };

  // for fetching connections
  const fetchConnections = async () => {
    try {
      const res = await axios.get(
        'http://localhost:3000/user/request/connections',
        { withCredentials: true }
      );

      dispatch(addConnections(res.data.connections));
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchFeed = async () => {
    try {
      if ( feedData && feedData.length > 0 ) return;

      const res = await axios.get('http://localhost:3000/feed?page=1', {
        withCredentials: true,
      });

      console.log('fetch res -- ' , res )

      dispatch(addFeed(res?.data?.feedUsers));
    } catch (error) {
      console.log(error.message);
    }
  };

  // fetch messages 
  const getMessage = async (toUserId) => {
    const res = await axios.get("http://localhost:3000/message/"+toUserId , {withCredentials: true}) ;
    dispatch(addSelectedUser( toUserId )) ;
    dispatch(addMessages(res.data.data))
  } 

  useEffect(() => {
    fetchFeed();
    fetchRequests();
    fetchConnections();
  }, []);


  const feedUsers = Array.from(feedData || []);

  if ( !feedData || feedUsers.length <= 0) {
    return (
      <div className="lg:min-h-screen flex justify-center items-center">
        <div className="flex flex-1 justify-center">
        <UserCardShimmer/>
      </div>
      {/* Hide SideSection on small screens, show on large screens */}
      <div className="h-full hidden lg:block">
        <SideSectionShimmer/>
      </div>
      </div>
    );
  }

  return (
    <div className="lg:h-screen flex items-center justify-between overflow-hidden">
      <div className="flex flex-1 justify-center">
        <UserCard feedUser={feedUsers[0]} sendRequest={sendConnection} />
      </div>
      {/* Hide SideSection on small screens, show on large screens */}
      <div className="h-full hidden lg:block">
        <SideSection getMessage={getMessage} selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default Feed;
