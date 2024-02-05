import React from 'react';

const ChatTextarea = () => {
    return (
        <div className="bg-gray-100 flex items-center py-4">
            <svg className="mx-4" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 7.32715V14.6535" stroke="#128C7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.6666 10.9904H7.33331" stroke="#128C7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input
                type="text"
                placeholder="Say Something..."
                className="pl-10 w-full pr-4 py-2 rounded-full text-16 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <svg className="mx-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Iconly/Light/Voice">
                    <g id="Voice">
                        <path id="Stroke 1" d="M11.9998 21.9998V18.8389" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 14.8481V14.8481C9.75659 14.8481 7.93771 13.0218 7.93771 10.7682V6.08095C7.93771 3.82732 9.75659 2 11.9998 2C14.244 2 16.0619 3.82732 16.0619 6.08095V10.7682C16.0619 13.0218 14.244 14.8481 11.9998 14.8481Z" stroke="#128C7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Stroke 5" d="M20 10.8008C20 15.2396 16.4188 18.8385 11.9995 18.8385C7.58117 18.8385 4 15.2396 4 10.8008" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </g>
            </svg>

        </div>
    );
};

export default ChatTextarea;
