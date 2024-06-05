import HeroComponent from "@/components/HeroComponent";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import React from "react";

const ServicesProjects = () => {
    return (
        <div className="overflow-hidden">
            <HeroComponent text="Our Services & Projects" urlImage="/img/a2.jpg" textButton="Contact Us" urlButton="#" useButton/>

            <section className="container mx-auto mb-10">
                <div className="flex flex-col p-10 text-center">
                    <h1 className="text-[30px] font-semibold">About Us</h1>
                    <p className="text-sm">Meet our most sophisticated services to help you grow</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
                    <div className="p-10 hover:bg-kuning hover:text-white mx-10 lg:mx-0 transition-all delay-100">
                        <DevicePhoneMobileIcon className="w-14"/>
                        <h1 className="text-[23px] font-semibold mt-3">IT Consultant</h1>
                        <p>Provide the Fundamental of correctness, security, and easy-to-use of IT Implementation.</p>
                    </div>
                    <div className="p-10 hover:bg-kuning hover:text-white mx-10 lg:mx-0 transition-all delay-100">
                        <DevicePhoneMobileIcon className="w-14"/>
                        <h1 className="text-[23px] font-semibold mt-3">Mobile Application Development</h1>
                        <p>Develop any application for mobile phone in all platforms (Android, iOS, Windows Phone, Blackberry, Symbian OS).</p>
                    </div>
                    <div className="p-10 hover:bg-kuning hover:text-white mx-10 lg:mx-0 transition-all delay-100">
                        <DevicePhoneMobileIcon className="w-14"/>
                        <h1 className="text-[23px] font-semibold mt-3">Web Development</h1>
                        <p>Develop any internet-application web based for various websites. Providing services to create any functionality for middleware.</p>
                    </div>
                    <div className="p-10 hover:bg-kuning hover:text-white mx-10 lg:mx-0 transition-all delay-100">
                        <DevicePhoneMobileIcon className="w-14"/>
                        <h1 className="text-[23px] font-semibold mt-3">IT Infrastructure</h1>
                        <p>Provide correct way for the infrastructure of various system.</p>
                    </div>
                    <div className="p-10 hover:bg-kuning hover:text-white mx-10 lg:mx-0 transition-all delay-100">
                        <DevicePhoneMobileIcon className="w-14"/>
                        <h1 className="text-[23px] font-semibold mt-3">Digital Agency</h1>
                        <p>Bring your product to meet the craving customers</p>
                    </div>
                    <div className="p-10 hover:bg-kuning hover:text-white mx-10 lg:mx-0 transition-all delay-100">
                        <DevicePhoneMobileIcon className="w-14"/>
                        <h1 className="text-[23px] font-semibold mt-3">AI (Artificial Intelligence)</h1>
                        <p>Smarter way to evaluate, monitor and decision making process</p>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-biru text-white">
                <div className="flex flex-col p-10 text-center">
                    <h1 className="text-[30px] font-semibold">Our Projects</h1>
                    <p className="text-sm">World class products ready to impact your business</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto container">
                    <div className="p-10 m-5 hover:bg-kuning hover:text-white lg:mx-1 transition-all delay-100 rounded-md md:mx-3" style={{ backgroundImage: "url('/img/a11.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <DevicePhoneMobileIcon className="w-14"/>
                        <h1 className="text-[23px] font-semibold mt-3">IT Consultant</h1>
                        <p>Provide the Fundamental of correctness, security, and easy-to-use of IT Implementation.</p>
                    </div>
                    <div className="p-10 m-5 hover:bg-kuning hover:text-white lg:mx-1 transition-all delay-100 rounded-md md:mx-3"  style={{ backgroundImage: "url('/img/a11.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <DevicePhoneMobileIcon className="w-14"/>
                        <h1 className="text-[23px] font-semibold mt-3">Mobile Application Development</h1>
                        <p>Develop any application for mobile phone in all platforms (Android, iOS, Windows Phone, Blackberry, Symbian OS).</p>
                    </div>
                    <div className="p-10 m-5 hover:bg-kuning hover:text-white lg:mx-1 transition-all delay-100 rounded-md md:mx-3"  style={{ backgroundImage: "url('/img/a11.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <DevicePhoneMobileIcon className="w-14"/>
                        <h1 className="text-[23px] font-semibold mt-3">Web Development</h1>
                        <p>Develop any internet-application web based for various websites. Providing services to create any functionality for middleware.</p>
                    </div>
                    <div className="p-10 m-5 hover:bg-kuning hover:text-white lg:mx-1 transition-all delay-100 rounded-md md:mx-3"  style={{ backgroundImage: "url('/img/a11.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <DevicePhoneMobileIcon className="w-14"/>
                        <h1 className="text-[23px] font-semibold mt-3">IT Infrastructure</h1>
                        <p>Provide correct way for the infrastructure of various system.</p>
                    </div>
                    <div className="p-10 m-5 hover:bg-kuning hover:text-white lg:mx-1 transition-all delay-100 rounded-md md:mx-3"  style={{ backgroundImage: "url('/img/a11.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <DevicePhoneMobileIcon className="w-14"/>
                        <h1 className="text-[23px] font-semibold mt-3">Digital Agency</h1>
                        <p>Bring your product to meet the craving customers</p>
                    </div>
                    <div className="p-10 m-5 hover:bg-kuning hover:text-white lg:mx-1 transition-all delay-100 rounded-md md:mx-3"  style={{ backgroundImage: "url('/img/a11.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <DevicePhoneMobileIcon className="w-14"/>
                        <h1 className="text-[23px] font-semibold mt-3">AI (Artificial Intelligence)</h1>
                        <p>Smarter way to evaluate, monitor and decision making process</p>
                    </div>
                </div>
                <div className="text-white flex justify-between items-center flex-col text-center py-16 h-60">
                    <p className="text-sm">Find something related to you, feel free to talk to us</p>
                    <button className="border-1 border-white border px-4 py-2 font-semibold hover:bg-white hover:text-black hover:mb-1 transition-all">Contact Us</button>
                </div>
            </section>
        </div>
    )
}

export default ServicesProjects;