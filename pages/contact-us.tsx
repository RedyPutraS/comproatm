import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
    return (
        <div className="overflow-hidden">
            <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[40vh] md:h-[40vh] lg:h-[50vh] custom-bg-com" style={{ backgroundImage: `url(/images/bg.jpg)` }}>
                <div className="flex justify-end flex-col w-[80%] h-[80%] mx-auto items-start">
                    <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold">Contact Us</h1>
                </div>
            </div>

            <section className="flex flex-wrap justify-start items-start mx-auto">
                <div className="flex flex-col p-10 pt-14 w-full pb-14 container mx-auto lg:w-[50%]">
                    <p className="font-sm font-semibold">Get in touch</p>
                    <p className="font-sm font-semibold mt-2">Fields marked with an * are required</p>
                    <form action="">
                        <div className="h-[430px] flex justify-around flex-col">
                            <label htmlFor="name" className="font-semibold">Name <span className="text-red-600 font-bold">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`w-full h-8 p-4 border-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                                placeholder="Enter your name"
                            />
                            <label htmlFor="email" className="font-semibold">Email <span className="text-red-600 font-bold">*</span></label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className={`w-full h-8 p-4 border-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                                placeholder="Enter your email"
                            />
                            <label htmlFor="message" className="font-semibold">Message <span className="text-red-600 font-bold">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                className={`w-full p-4 border-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                                placeholder="Enter your message"
                            />
                            <label htmlFor="message" className="font-semibold">Recaptcha <span className="text-red-600 font-bold">*</span></label>
                            <ReCAPTCHA sitekey="6LfgDekpAAAAAEZLaQ4pmj25NuJqzSYM-UXUlePQ" />
                        </div>
                        <button className="border-1 bg-biru py-2 px-5 mt-4 hover:mt-3 hover:mb-1 transition-all text-white">Submit</button>
                    </form>
                </div>
                <div className="bg-hijau w-full lg:w-[50%]">
                    <div className="flex flex-col p-10 pt-14 pb-14 container mx-auto">
                        <div className="flex flex-col text-white py-2">
                            <div className="flex flex-row items-center">
                                <div className="w-[10%] mr-5 md:mr-0">
                                    <MapPinIcon className="w-[40px] md:w-[50px]"/>
                                </div>
                                <div className="w-[90%]">
                                    <p className="text-[12px] md:text-lg">Equity Tower 41st Floor Sudirman Central Business District (SCBD) Jl. Jend. Sudirman Kav. 52-53 Lot 9 Jakarta Selatan 12190</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center mt-2">
                                <div className="w-[10%] mr-5 md:mr-0">
                                    <EnvelopeIcon className="w-[40px] md:w-[50px]"/>
                                </div>
                                <div className="w-[90%]">
                                    <p className="text-[12px] md:text-lg">pengaduan@atm.com</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center mt-2">
                                <div className="w-[10%] mr-5 md:mr-0">
                                    <PhoneIcon className="w-[40px] md:w-[50px]"/>
                                </div>
                                <div className="w-[90%]">
                                    <p className="text-[12px] md:text-lg">pengaduan@atm.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-600 h-full">
                            <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2739562596003!2d106.80438917475055!3d-6.2275661937605244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb17052fa543%3A0xd3cc4e7c5c1bba4e!2sPT.%20Artha%20Teknologi%20Mahakarya!5e0!3m2!1sen!2sid!4v1716791650458!5m2!1sen!2sid" className="absolute top-0 left-0 w-full h-full" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={true} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs;