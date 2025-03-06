import { useSelector } from "react-redux";

const ConnectionsList = ({getMessage}) => {
    const connections = useSelector((state)=> state.connections ) ;
   

  
    return (
        <div className="">
            {
                connections.map((user)=>(
                    <div key={user._id} onClick={()=>getMessage(user._id) } className="bg-green-100 h-sm w-sm  hover:cursor-pointer ">{user.firstName}</div>
                ))
            }
        </div>
    );
}

export default ConnectionsList;
