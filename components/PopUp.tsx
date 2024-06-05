import Image from "next/image";
import React from "react";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    description: string;
    title: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, imageSrc, description, title }) => {
    console.log(imageSrc);
    
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg w-4/5 h-4/5 relative flex flex-col items-center lg:mt-10">
                <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
                    &#x2715;
                </button>
                <p className="mt-4 text-lg font-semibold">{title}</p>
                <div className="flex-1 flex justify-center items-center">
                    <Image src={imageSrc} alt="Popup Image" width={1000} height={1000} className="max-w-full max-h-full object-contain md:h-[500px] lg:h-[300px]"/>
                </div>
                <p className="mt-4 text-sm">{description}</p>
            </div>
        </div>
    );
}

export default Popup;
