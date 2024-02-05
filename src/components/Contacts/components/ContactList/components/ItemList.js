import React from 'react';
import ItemCard from "./ItemCard";
import mainStore from "../../../../Store";

const ItemList = () => {
    const {users} = mainStore()
    return (
        <div className="overflow-y-auto max-h-72">
            {
                users.map(user => (
                    <ItemCard item={user}/>
                ))
            }

        </div>
    );
};

export default ItemList;
