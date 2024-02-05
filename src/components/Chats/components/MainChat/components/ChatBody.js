import React from 'react';

const ChatBody = () => {
    return (
        <div className="bg-cover bg-center h-full px-7 overflow-y-auto"
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1475965894430-b05c9d13568a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", maxHeight: '360px'}}
        >
            <div className="flex flex-col">
                {/* Сообщение, отправленное вами */}
                <div className="flex justify-end mt-2">
                    <div className="bg-chatBgColor rounded-lg p-2 max-w-2/3"> {/* Стили для отправленного сообщения */}
                        Here are some photos you were asking about.
                    </div>
                </div>
                {/* Сообщение, полученное от другого пользователя */}
                <div className="flex justify-start mt-2">
                    <div className="bg-chatBgColor rounded-lg p-2 max-w-2/3"> {/* Стили для полученного сообщения */}
                        Here are some photos you were asking about.
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ChatBody;
