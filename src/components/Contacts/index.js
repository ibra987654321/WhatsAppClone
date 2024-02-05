import React from 'react';
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";

const Contacts = () => {
    return (
        <div className="bg-gray-100 pt-5 pl-4 pr-4 rounded-bl-2xl rounded-tl-2xl">
            <Navbar/>
            <ContactList/>
        </div>
    );
};

export default Contacts;
