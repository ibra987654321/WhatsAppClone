import React from 'react';

const DynamicIcons = ({state, countMessage}) => {

    switch (state) {
        case 'secured' :
            return    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.824 9.22822L14.7723 3.176C14.6877 3.09187 14.5801 3.03463 14.463 3.01149C14.346 2.98835 14.2247 3.00033 14.1144 3.04593C14.0041 3.09153 13.9098 3.16871 13.8433 3.26777C13.7768 3.36683 13.741 3.48335 13.7405 3.60268V5.36993L7.831 8.74707H4.96552C4.8462 8.74757 4.72969 8.78333 4.63063 8.84987C4.53158 8.91641 4.45441 9.01074 4.40881 9.12102C4.36322 9.2313 4.35124 9.35259 4.37438 9.46966C4.39752 9.58673 4.45475 9.69434 4.53887 9.77897L8.22436 13.4678L3.1258 20.0254C3.03754 20.1399 2.99321 20.2823 3.00084 20.4267C3.00848 20.5711 3.06757 20.7081 3.16742 20.8127C3.26727 20.9173 3.40127 20.9827 3.54516 20.997C3.68906 21.0114 3.83333 20.9737 3.95186 20.8908L10.8236 16.0672L14.2216 19.4625C14.3062 19.5466 14.4138 19.6039 14.5309 19.627C14.6479 19.6502 14.7692 19.6382 14.8795 19.5926C14.9898 19.547 15.0841 19.4698 15.1506 19.3708C15.2172 19.2717 15.2529 19.1552 15.2534 19.0358V15.8736L18.6212 10.2601H20.3974C20.5167 10.2596 20.6332 10.2239 20.7323 10.1573C20.8313 10.0908 20.9085 9.99644 20.9541 9.88617C20.9997 9.77589 21.0117 9.65459 20.9885 9.53753C20.9654 9.42046 20.9081 9.31285 20.824 9.22822ZM6.56014 17.5833L9.08976 14.3333L9.95515 15.1987L6.56014 17.5833ZM18.2793 9.04968C18.1742 9.05084 18.0712 9.07936 17.9805 9.13242C17.8897 9.18548 17.8144 9.26126 17.7619 9.35229L14.1308 15.4045C14.0754 15.4959 14.0451 15.6003 14.0431 15.7071V17.5742L6.427 9.95751H7.99137C8.09738 9.95824 8.20173 9.93111 8.29396 9.87883L14.6482 6.2475C14.7406 6.19418 14.8172 6.1174 14.8704 6.02493C14.9235 5.93247 14.9513 5.8276 14.9508 5.72096V5.06429L18.9359 9.04968H18.2793Z" fill="#46444F"/>
            </svg>
        case 'read' :
            return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3243 5.16599C11.5548 5.39108 11.5592 5.7604 11.3341 5.99089L5.63748 11.8242C5.5227 11.9418 5.36367 12.0055 5.19948 11.9996C5.03529 11.9938 4.88117 11.919 4.77499 11.7937L2.30494 8.87699C2.09674 8.63114 2.12726 8.26305 2.37311 8.05485C2.61896 7.84665 2.98704 7.87716 3.19524 8.12301L5.25085 10.5503L10.4994 5.17577C10.7245 4.94528 11.0938 4.9409 11.3243 5.16599Z" fill="#2361FF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6576 5.16599C14.8881 5.39108 14.8924 5.7604 14.6673 5.99089L8.97073 11.8242C8.85595 11.9418 8.69692 12.0055 8.53273 11.9996C8.36854 11.9938 8.21442 11.919 8.10824 11.7937L5.6382 8.87699C5.42999 8.63114 5.46051 8.26305 5.70636 8.05485C5.95221 7.84665 6.32029 7.87716 6.52849 8.12301L8.5841 10.5503L13.8327 5.17577C14.0577 4.94528 14.4271 4.9409 14.6576 5.16599Z" fill="#2361FF"/>
            </svg>
        case 'message':
            return <div className="bg-green-100 flex items-center text-12 justify-center rounded-full w-6 h-6 text-green-600 font-semibold">{countMessage}</div>
    }
};

export default DynamicIcons;
