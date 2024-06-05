import HeroComponent from "@/components/HeroComponent";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const Career = () => {
    return (
        <div className="overflow-hidden">
            <HeroComponent 
                text="Yes, We Are Hiring." 
                urlImage="/img/4.png" 
                textButton="-" 
                urlButton="#" 
                useButton={false} 
            />
            <section className="container mx-auto flex flex-wrap lg:justify-between">
                <div className="p-10 w-full">
                    <div>
                        <h1 className="text-[20px] md:text-[26px] lg:font-semibold">Our Available Roles</h1>
                        <hr className="border-b-2 border-biru mt-5 lg:mt-9 w-[250px] md:w-[350px]" />
                    </div>
                    <div className="border border-gray-500 my-5 rounded-md lg:relative p-3">
                        <p className="text-sm text-gray-500 lg:absolute lg:right-10 lg:text-lg">Posted 16 Apr 2024 * 23 Apr 2024</p>
                        <p className="text-lg font-bold mb-4 lg:text-2xl">Junior Grapich Designer</p>
                        <div className="flex flex-col lg:flex-row w-full lg:items-center my-4">
                            <span className="text-sm p-2 bg-hijau rounded-md w-[100px] text-center">INTERSHIP</span>
                            <p className="text-sm text-gray-500 my-2 lg:my-0 lg:ml-4">Salary: $20000 - $25000</p>
                        </div>
                        <div className="flex flex-row">
                            <Image src={"/img/atm-master1.png"} alt="ATM-master.png" width={100} height={100} className="w-[100px] bg-cyan-300 p-2 rounded-md" />
                            <div className="flex flex-col ml-3">
                                <p className="text-lg font-semibold">ATM</p>
                                <div className="flex flex-wrap">
                                    <MapPinIcon className="w-[20px]"/>
                                    <p className="text-sm text-gray-500"> Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full lg:w-[200px] bg-biru mt-4 p-2 text-white rounded-md lg:absolute bottom-5 right-10">Lamar</button>
                    </div>
                    <div className="border border-gray-500 my-5 rounded-md lg:relative p-3">
                        <p className="text-sm text-gray-500 lg:absolute lg:right-10 lg:text-lg">Posted 12 Apr 2024 * 23 Apr 2024</p>
                        <p className="text-lg font-bold mb-4 lg:text-2xl">Junior IT Support</p>
                        <div className="flex flex-col lg:flex-row w-full lg:items-center my-4">
                            <span className="text-sm p-2 bg-hijau rounded-md w-[100px] text-center">INTERSHIP</span>
                            <p className="text-sm text-gray-500 my-2 lg:my-0 lg:ml-4">Salary: $17000 - $20000</p>
                        </div>
                        <div className="flex flex-row">
                            <Image src={"/img/atm-master1.png"} alt="ATM-master.png" width={100} height={100} className="w-[100px] bg-cyan-300 p-2 rounded-md" />
                            <div className="flex flex-col ml-3">
                                <p className="text-lg font-semibold">ATM</p>
                                <div className="flex flex-wrap">
                                    <MapPinIcon className="w-[20px]"/>
                                    <p className="text-sm text-gray-500"> Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full lg:w-[200px] bg-biru mt-4 p-2 text-white rounded-md lg:absolute bottom-5 right-10">Lamar</button>
                    </div>
                </div>
                {/* <div className="p-10 pt-0 lg:pt-16 w-[400px] md:w-[100%] lg:w-[700px]">
                    <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2739562596003!2d106.80438917475055!3d-6.2275661937605244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb17052fa543%3A0xd3cc4e7c5c1bba4e!2sPT.%20Artha%20Teknologi%20Mahakarya!5e0!3m2!1sen!2sid!4v1716791650458!5m2!1sen!2sid" className="absolute top-0 left-0 w-full h-full" 
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div> */}
            </section>
        </div>
    )
}

export default Career;