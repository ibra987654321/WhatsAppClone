import React from 'react';
import mainStore from "../../../Store";
import ItemList from "./components/ItemList";

const ContactList = () => {

    const {activeTab, setActiveTab} = mainStore();

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div >
            <div className="border-b border-gray-200 ">
                <div className="container mx-auto my-6 flex rounded-lg overflow-hidden bg-white ">
                    {['Favourites', 'Friends', "Groups"].map((tab, index) => (
                        <div
                            key={index}
                            className={`py-2 w-full block text-14 cursor-pointer focus:outline-none ${activeTab === index ? 'bg-btnBgColor text-white' : 'text-textColor'}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
                <div className="container mx-auto">
                    {activeTab === 0 && <div><ItemList/></div>}
                    {activeTab === 1 && <div>Содержимое таба 2</div>}
                    {activeTab === 2 && <div>Содержимое таба 3</div>}
                </div>
            </div>
        </div>
    );
};

export default ContactList;
