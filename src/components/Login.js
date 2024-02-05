import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    return (
        <>
            <div
                style={{maxWidth: '1000px', maxHeight: '500px'}}
                className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white rounded-2xl"
            >
                <div className="flex justify-center items-center flex-col">
                    <img src="https://miro.medium.com/v2/resize:fit:307/1*Uzg6QnHA2gAJWOjO72Xwng.png" alt="Пример изображения" className="w-60 h-60" />
                    <div className="text-blue-950 text-18 font-semibold">Login in to WhatsApp by QR Code</div>
                </div>

                <div className=" mx-auto sm:w-full sm:max-w-sm">
                    <ul className="mt-10 text-center text-14 text-gray-500">
                        <li className="flex items-center">
                            <div className="mr-3 bg-green-100 flex items-center justify-center rounded-full w-6 h-6 text-green-600 font-mono">1</div>Open WhatsApp on your phone
                        </li>
                        <li className="flex items-center my-2">
                            <div className="mr-3 bg-green-100 flex items-center justify-center rounded-full w-6 h-6 text-green-600 font-mono">2</div>Tap Menu
                            <svg width="24" height="24" className="mx-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="#F3FFFE"/>
                                <path d="M19 8.5L12 15.5L5 8.5" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            or Settings and select Linked Devices
                        </li>
                        <li className="flex items-center">
                            <div className="mr-3 bg-green-100 flex items-center justify-center rounded-full w-6 h-6 text-green-600 font-mono">3</div>Point your phone to this screen to capture
                        </li>
                    </ul>
                    <div className="flex items-center justify-center mt-10 cursor-pointer" onClick={() =>   navigate('/')}>
                        <svg width="20" height="21" viewBox="0 0 20 21" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="20" height="20" rx="4" fill="#EBEBED"/>
                            <mask id="mask0_103_1690" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
                                <rect y="0.5" width="20" height="20" rx="4" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_103_1690)">
                                <rect y="0.5" width="20" height="20" fill="#128C7E"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8493 7.64228C14.0469 7.83521 14.0507 8.15177 13.8577 8.34934L8.97491 13.3493C8.87653 13.4501 8.74022 13.5047 8.59948 13.4997C8.45875 13.4947 8.32665 13.4306 8.23564 13.3231L6.11845 10.8231C5.93999 10.6124 5.96615 10.2969 6.17688 10.1184C6.38761 9.93998 6.70311 9.96614 6.88157 10.1769L8.64352 12.2574L13.1423 7.65066C13.3352 7.4531 13.6518 7.44935 13.8493 7.64228Z" fill="white"/>
                            </g>
                        </svg>
                        Keep me signed in
                    </div>
                </div>
            </div>
        </>
    )
}
