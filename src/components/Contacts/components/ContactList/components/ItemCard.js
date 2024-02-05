import React from 'react';
import moment from "moment";
import DynamicIcons from "./DynamicIcons";
import {useNavigate} from "react-router-dom";

const ItemCard = ({item}) => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate('/chats/' + id)
    }

    return (
        <div className="flex justify-between  py-2 cursor-pointer" onClick={(event) => handleClick(item.id)}>
            <div className="flex items-center">
                <img
                    src={item.photo}
                    className="h-16 w-16 rounded-md"
                />
                <div className="ml-3">
                    <div className="text-textBlack text-left text-16">{item.name}</div>
                    <div className="text-12 mt-2 text-left truncate">{item.lastMessage}</div>
                </div>
            </div>

            <div className="flex flex-col justify-between items-end">
                <div className="text-gray-400 text-10">{moment(item.dateTime).format('hh:mm A')}</div>
                <div className="">
                    <DynamicIcons state={item.state} countMessage={item.countMessages}/>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
