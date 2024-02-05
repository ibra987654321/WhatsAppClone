import Contacts from "./Contacts";
import Chats from "./Chats"
export default function MainLayout() {
    return (
        <>
            <div
                style={{maxWidth: '1000px', maxHeight: '500px'}}
                className=" container  bg-white rounded-2xl overflow-hidden"
            >
                <div className="grid grid-cols-6 gap-0">
                    <div className="col-span-2 ">
                        <Contacts/>
                    </div>
                    <div className="col-span-4 ">
                        <Chats/>
                    </div>
                </div>
            </div>
        </>
    )
}
