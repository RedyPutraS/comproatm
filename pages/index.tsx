import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import { Square2StackIcon, Squares2X2Icon, WindowIcon, WrenchIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";

const HomePage = () => {
  return (
      <div className="overflow-hidden">
        <Hero/>

        <section className="pt-10 container mx-auto ">
          <div className="flex flex-wrap justify-center items-center lg:w-[90%] mx-auto ">
            <div className="lg:w-[60%] ">
              <Image src={"/img/g2.jpg"} alt="ATM-master.png" width={1000} height={1000} className="w-[370px] md:w-[600px] lg:w-[500px] rounded-md"/>
            </div>
            <div className="p-10 md:p-5 lg:p-0 flex flex-col justify-between lg:w-[40%]">
              <div>
                  <span className="font-medium text-sm md:text-xl">At a Glance CD</span>
                  <h1 className="text-[20px] font-semibold md:text-[25px] lg:text-[20px] mt-2">Enterprice Business</h1>
                  <p className="text-[12px] md:text-[18px] py-1">Main Customers: Government, BUMN, and Public Companies</p>
                  <p className="text-[12px] md:text-[18px] py-1 mt-5">Key Initiatives:</p>
                  <ul className="list-disc pl-5">
                    <li className="mb-2"><p className="text-[12px] md:text-[16px]">Core Technology System Creation</p></li>
                    <li className="mb-2"><p className="text-[12px] md:text-[16px]">Expansion of Cyber-Security</p></li>
                    <li className="mb-2"><p className="text-[12px] md:text-[16px]">Government and Telco Partnership</p></li>
                  </ul>
                </div>
                <div className="mt-5">
                  <h1 className="text-[20px] font-semibold md:text-[25px] lg:text-[20px]">System Platform Business</h1>
                  <p className="text-[12px] md:text-[18px] py-1">Main Customers: Distributors, F&B, and Factories</p>
                  <p className="text-[12px] md:text-[18px] py-1 mt-5">Key Initiatives:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li className="mb-2"><p className="text-[12px] md:text-[16px]">Strengthening Key business areas</p></li>
                    <li className="mb-2"><p className="text-[12px] md:text-[16px]">Acceleration of Establishing ERP system</p></li>
                  </ul>
                </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto lg:mt-10">
          <div className="flex flex-wrap justify-start items-center lg:w-[90%] mx-auto ">
            <div className="p-10 pt-0 md:p-14 flex flex-wrap lg:w-[60%]">
              <div className="py-4">
                <span className="font-medium text-sm md:text-xl">Our Vision</span>
                <h1 className="text-[20px] font-semibold md:text-[25px] lg:text-[20px]">Creating Pathways for others in the digital realm</h1>
              </div>
              <div className="py-4">
                <span className="font-medium text-sm md:text-xl">Our Mission</span>
                <h1 className="text-[20px] font-semibold md:text-[25px] lg:text-[20px]">Providing sustainable digital solutions for the clients</h1>
              </div>
            </div>
            <div className="lg:w-[40%]  mx-auto lg:mx-0">
              <Image src={"/img/a2.jpg"} alt="ATM-master.png" width={1000} height={1000} className="w-[370px] md:w-[600px] lg:w-[500px] rounded-md"/>
            </div>
          </div>
        </section>

        <section className="custom-bg1 h-[125vh]">
          <div className="mx-auto container p-10 md:p-16 flex flex-wrap lg:w-[90%]">
            <div className="lg:pl-[40px]">
              <h1 className="font-semibold text-xl">Our Services</h1>
              <button className="border-2 border-biru px-4 py-1 rounded-md text-[13px] w-[150px] mt-7 hover:bg-biru hover:text-kuning font-semibold">LEARN MORE</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-5">
              <div className="p-5 mt-5 rounded-md hover:bg-kuning md:p-14 lg:w-[400px] transition-all delay-150">
                <Squares2X2Icon className="w-8 md:w-12"/>
                <h1 className="font-semibold text-lg">IT CONSULTANT</h1>
                <p className="text-sm md:text-lg">Provide the Fundamental of correctness, security, and easy-to-use of IT Implementation.</p>
              </div>
              <div className="p-5 mt-5 rounded-md hover:bg-kuning md:p-14 lg:w-[400px]  transition-all delay-150">
                <Squares2X2Icon className="w-8 md:w-12"/>
                <h1 className="font-semibold text-lg">Mobile Application Development</h1>
                <p className="text-sm md:text-lg">Develop any application for mobile phone in all platforms (Android, iOS, Windows Phone, Blackberry, Symbian OS).</p>
              </div>
              <div className="p-5 mt-5 rounded-md hover:bg-kuning md:p-14 lg:w-[400px]  transition-all delay-150">
                <Squares2X2Icon className="w-8 md:w-12"/>
                <h1 className="font-semibold text-lg">Web Development</h1>
                <p className="text-sm md:text-lg">Develop any internet-application web based for various websites. Providing services to create any functionality for middleware.</p>
              </div>
              <div className="p-5 mt-5 rounded-md hover:bg-kuning md:p-14 lg:w-[400px]  transition-all delay-150">
                <Squares2X2Icon className="w-8 md:w-12"/>
                <h1 className="font-semibold text-lg">IT Infrastructure</h1>
                <p className="text-sm md:text-lg">Provide correct way for the infrastructure of various system.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default HomePage;