

import MainContent from "../components/MainLayout"
import Chats from "../components/Chats/index";


const MainRoutes = {
    path: '/',
    element: <MainContent/>,
    children: [
        {
            path: 'chats/:id',
            element: <Chats/>
        }
    ]
}

export default MainRoutes
