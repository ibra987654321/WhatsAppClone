import {create} from "zustand";

const mainStore = create((set) => ({
    activeTab: 0,
    setActiveTab: (newTab) => set({activeTab: newTab}),
    users: [
        {
            id: 1,
            photo: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Иван',
            status: 'Активен',
            dateTime: '2024-01-31T08:30:00',
            state: 'secured',
            countMessages: 0,
            lastMessage: 'Привет, как дела?'
        },
        {
            id: 2,
            photo: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Елена',
            status: 'Неактивен',
            dateTime: '2024-01-30T15:45:00',
            state: 'read',
            countMessages: 0,
            lastMessage: 'Понял, спасибо за информацию.'
        },
        {
            id: 3,
            photo: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Актан',
            status: 'Неактивен',
            dateTime: '2024-01-30T15:45:00',
            state: 'message',
            countMessages: 5,
            lastMessage: 'Понял, спасибо за информацию.'
        },
        {
            id: 4,
            photo: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Актан',
            status: 'Неактивен',
            dateTime: '2024-01-30T15:45:00',
            state: 'message',
            countMessages: 5,
            lastMessage: 'Понял, спасибо за информацию.'
        },
    ]
}))

export default mainStore
