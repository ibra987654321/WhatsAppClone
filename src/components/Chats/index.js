import {useParams} from "react-router-dom";
import EmptyChat from "./components/EmptyChat";
import MainChat from "./components/MainChat/MainChat";

const Chats = () => {
    let { id } = useParams();
    return (
        <div className="h-full">
            {
                id === undefined ? <EmptyChat/> : <MainChat uid={id}/>
            }
        </div>
    );
};

export default Chats;
