import React from 'react';

const ChatHeader = ({user}) => {
    return (
        <div className="flex justify-between my-2">
            <div className="flex ml-4">
                <img
                    src={user.photo}
                    className="h-12 w-12 rounded-md"
                />
                <div className="ml-3 text-left">
                    <div className="text-18 text-backText">{user.name}</div>
                    <div className="text-12 text-gray-400">{user.status}</div>
                </div>
            </div>
            <div className="flex justify-between items-center w-full mr-8" style={{maxWidth: "200px"}}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.353 1.5C17.054 1.911 19.978 4.831 20.393 8.532" stroke="#128C7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.353 5.04297C15.124 5.38697 16.508 6.77197 16.853 8.54297" stroke="#128C7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0315 11.4724C14.0205 15.4604 14.9255 10.8467 17.4653 13.3848C19.9138 15.8328 21.3222 16.3232 18.2188 19.4247C17.8302 19.737 15.3613 23.4943 6.68448 14.8197C-1.99339 6.144 1.76158 3.67244 2.07396 3.28395C5.18378 0.173846 5.66684 1.58938 8.11541 4.03733C10.6541 6.5765 6.04255 7.48441 10.0315 11.4724Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3 5.97984L18.593 3.28484C19.409 2.61684 20.633 3.19884 20.632 4.25184L20.62 11.6008C20.619 12.6538 19.394 13.2308 18.58 12.5628L15.3 9.86784" stroke="#128C7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2969 11.5383C15.3777 13.3704 13.8991 14.9196 11.9946 14.9975C11.8543 15.0034 5.01528 14.9896 5.01528 14.9896C3.11993 15.1335 1.46112 13.7715 1.31162 11.9463C1.30036 11.8103 1.30343 4.47219 1.30343 4.47219C1.21946 2.63815 2.69601 1.08499 4.6016 1.00418C4.74393 0.997278 11.5737 1.01009 11.5737 1.01009C13.4783 0.868176 15.1422 2.24001 15.2897 4.07405C15.2999 4.2061 15.2969 11.5383 15.2969 11.5383Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 15L18.524 18.5149" stroke="#128C7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="8.76803" cy="8.76783" r="7.99" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 1.5L8 8.5L1 1.5" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
        </div>
    );
};

export default ChatHeader;
