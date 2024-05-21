import React from "react";
import { TypeAnimation } from 'react-type-animation';

const TypeWriterEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'We Are IT Consultant ',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'We Are Mobile Application Development',
                1000,
                'We Are Web Development',
                1000,
                'We Are IT Infrastructure',
                1000,
                'We Are Digital Agency',
                1000,
                'We Are AI (Artificial Intelligence)',
                1000,
                'We Are Big Data Analyst',
                1000,
                'We Are System Integrator',
                1000,
                'We Are Usability Insight',
                1000,
            ]}
            wrapper="span"
            speed={50}
            className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
            repeat={Infinity}
        />
    )
}

export default TypeWriterEffect;