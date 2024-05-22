import HeroComponent from "@/components/HeroComponent";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div>
            <HeroComponent text={"About Us"} urlImage={'/img/bg1.png'} textButton="Dwonload Company Profile" urlButton="#"/>
            
            <section className="container mx-auto p-20">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-[30px] font-semibold text-center">About Us</h1>
                    <p className="text-center text-lg mt-5">We create everything that can be seen from a screen, creating your digital realm in the form of websites, mobile apps and cloud-based software, everything related to technology.</p>
                    <h1 className="text-[30px] font-semibold mt-20 text-center">Awake, Build, Impact!</h1>
                    <p className="text-center text-lg mt-5">To <span className="text-hijau font-bold">Awake</span> and enlighten people about the importance of technology. To <span className="text-hijau font-bold">Build</span> the best technology based on needs. To <span className="text-hijau font-bold">Impact</span> the world through technology innovations.</p>
                </div>
            </section>

            <section className="container mx-auto p-20 pt-0 pb-0">
                <PaperClipIcon className="w-7 -mb-6 lg:-mb-0 text-hijau"/>
                <div className="flex flex-wrap">
                    <h1 className="text-[25px] lg:text-[30px] font-semibold lg:w-[50%] lg:mx-0 mt-5">Empowering Enterprises Through Innovations</h1>
                    <div className="lg:w-[50%]  mx-auto lg:mx-0 mt-10">
                        <Image src={"/img/slider_admin.png"} alt="ATM-master.png" width={1000} height={1000} className="w-[370px] md:w-[600px] lg:w-[500px]"/>
                    </div>
                </div>
            </section>

            <section className="custom-bg1">
                <div className="mx-auto container p-10 md:p-16 flex flex-wrap justify-center items-center text-center lg:w-[90%] h-[100vh]">
                    <div className="lg:pl-[40px]">
                    <h1 className="text-[25px] lg:text-[30px] font-semibold lg:mx-0 mt-5">Ready to make something impactful?</h1>
                    <button className="border-2 border-biru px-4 py-2 rounded-md text-[13px] w-[150px] mt-7 hover:bg-biru hover:text-kuning font-semibold">Contact Us</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;