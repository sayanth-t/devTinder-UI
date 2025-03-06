
import { useSelector } from "react-redux";
import ConnectionsList from "./connectionsList";


const SideSection = ({getMessage,selectedUser}) => {

    const messages = useSelector((state)=> state.message ) ;
     
    return (
        <section className="h-screen flex items-center xl:w-md lg:w-sm">
            <ConnectionsList getMessage={getMessage}/>
            { !selectedUser ? (<div>No selected Chats</div>) : messages && messages.map((message)=> console.log(message )) }
        </section>
    );
}

export default SideSection;
