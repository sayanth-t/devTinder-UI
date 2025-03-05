import { useSelector } from "react-redux";
import RequestUserCard from "./RequestUserCard";

const Requests = () => {
   

    const requests = useSelector((state)=> state?.requests )

    

    if(!requests) return ;

    const pendingRequests = Array.from(requests) 

    console.log('requests ---  ', pendingRequests )



    return (
        <div className="lg:min-h-screen flex justify-center items-center">
            {
               pendingRequests.map((request)=>(
                <div key={request._id}>
                    <RequestUserCard request={request}/>
                </div>
               ))
            }
        </div>
    );
}

export default Requests;
