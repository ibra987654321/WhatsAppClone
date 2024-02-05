import React from 'react';

const Navbar = () => {
    return (
        <div >
            <nav className="flex justify-between items-center ">
                <div className="flex items-center">
                    <img src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="rounded-full w-9 h-9 mr-5"/>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.52" cy="12.48" r="10.77" stroke="#09132C" stroke-width="1.5" stroke-dasharray="14 4.94"/>
                        <circle cx="19.1999" cy="4.8" r="4.8" fill="#128C7E"/>
                    </svg>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 8.5L12 15.5L5 8.5" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </nav>
            {/*search*/}
            <div className="relative mt-6">
                <input
                    type="text"
                    placeholder="Search or start a new chat"
                    className="pl-10 w-full pr-4 py-2 rounded-full text-16 border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
