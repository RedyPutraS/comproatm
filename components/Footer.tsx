import { MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";

const Footer = () => {
    return (
        <section className="bg-biru h-[200px] text-white p-10 flex justify-center items-center">
            <MapPinIcon className="w-[130px] md:w-[50px]"/>
            <h1 className="text-sm md:text-lg">Equity Tower 41st Floor Sudirman Central Business District (SCBD) Jl. Jend. Sudirman Kav. 52-53 Lot 9 Jakarta Selatan 12190</h1>
        </section>
    );
}

export default Footer;