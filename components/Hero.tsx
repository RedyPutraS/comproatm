import React from "react";
import TypeWriterEffect from "./Helper/TypeWriterEffect";

const Hero = () => {
    return (
        <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[80vh] custom-bg">
            <div className="flex justify-center flex-col w-[80%] h-[80%] mx-auto items-center">
                <TypeWriterEffect/>
                <button className="text-white border px-5 py-2 mt-20 hover:bg-white hover:text-biru hover:font-semibold hover:mb-1 transition-all delay-100">Discover More</button>
            </div>
        </div>
    );
}

export default Hero;