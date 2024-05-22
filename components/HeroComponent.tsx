import React from "react";
import ButtonBorder from "./ButtonBorder";

interface Props {
    text: string;
    urlImage: string;
    textButton: string;
    urlButton: string;
}

const HeroComponent: React.FC<Props> = ({text, urlImage, textButton, urlButton}) => {
    return (
        <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[80vh] custom-bg-com" style={{ backgroundImage: `url(${urlImage})` }}>
            <div className="flex justify-center flex-col w-[80%] h-[80%] mx-auto items-center">
                <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold">{text}</h1>
                <ButtonBorder url={urlButton} text={textButton}/>
            </div>
        </div>
    )
}

export default HeroComponent;