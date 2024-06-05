import { EnvelopeIcon, MagnifyingGlassIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const NewsInfo = () => {

    const router = useRouter();

    // Function to handle click and navigate to the dynamic [slug] page with id as a query parameter
    const handleClick = (slug: string, id: number) => {
      router.push(`/newsinfo/${slug}?id=${id}`);
    }; // Replace with actual ID
    return (
        <div className="">
            <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[40vh] md:h-[40vh] lg:h-[50vh] custom-bg-com" style={{ backgroundImage: `url(/images/bg.jpg)` }}>
                <div className="flex justify-center flex-col w-[80%] h-[80%] mx-auto items-center">
                    <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold">News & Info</h1>
                </div>
            </div>

            <section className="container flex flex-wrap mx-auto mt-10">
                <div className="flex flex-wrap justify-center lg:w-[60%] md:w-full lg:h-[390px]">
                    <div 
                        className="w-[70%] md:w-full md:flex md:flex-wrap md:justify-around my-5"
                        onClick={() => handleClick("slug1", 1)}
                        style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickable
                        >
                        <Image
                            src={`/img/4.png`}
                            alt={`ATM-master.png`}
                            width={1000}
                            height={1000}
                            className="mt-3 md:mt-0 object-cover rounded-md md:h-[300px] md:w-[200px] lg:w-[250px] lg:h-[350px]"
                        />
                        <div className="md:w-[500px] flex flex-col justify-evenly">
                            <div className="flex flex-col text-start mt-5">
                            <div className="flex flex-wrap">
                                <span className="text-red-800 text-sm font-semibold mr-2">AI</span>
                                <span className="text-red-800 text-sm font-semibold mr-2">News</span>
                                <span className="text-red-800 text-sm font-semibold mr-2">Software</span>
                            </div>
                            <h1 className="text-[15px] font-semibold mt-2">Manfaat & Dampak AI Generatif</h1>
                            <p className="text-sm my-2 text-justify md:text-start">
                                Manfaat & Dampak AI Generatif AI Generatif adalah cabang kecerdasan buatan (AI) yang berfokus pada…
                            </p>
                            </div>
                            <div className="flex flex-row justify-start items-center my-1">
                            <Image
                                src={`/atm/user1.png`}
                                alt={`ATM-master.png`}
                                width={50}
                                height={50}
                                className="rounded-full mr-2"
                            />
                            <div className="flex flex-col text-sm">
                                <p>Admin</p>
                                <p>February 5, 2024</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="w-[70%] md:w-full md:flex md:flex-wrap md:justify-around my-5"
                        onClick={() => handleClick("slug1", 1)}
                        style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickable
                        >
                        <Image
                            src={`/img/4.png`}
                            alt={`ATM-master.png`}
                            width={1000}
                            height={1000}
                            className="mt-3 md:mt-0 object-cover rounded-md md:h-[300px] md:w-[200px] lg:w-[250px] lg:h-[350px]"
                        />
                        <div className="md:w-[500px] flex flex-col justify-evenly">
                            <div className="flex flex-col text-start mt-5">
                            <div className="flex flex-wrap">
                                <span className="text-red-800 text-sm font-semibold mr-2">AI</span>
                                <span className="text-red-800 text-sm font-semibold mr-2">News</span>
                                <span className="text-red-800 text-sm font-semibold mr-2">Software</span>
                            </div>
                            <h1 className="text-[15px] font-semibold mt-2">Manfaat & Dampak AI Generatif</h1>
                            <p className="text-sm my-2 text-justify md:text-start">
                                Manfaat & Dampak AI Generatif AI Generatif adalah cabang kecerdasan buatan (AI) yang berfokus pada…
                            </p>
                            </div>
                            <div className="flex flex-row justify-start items-center my-1">
                            <Image
                                src={`/atm/user1.png`}
                                alt={`ATM-master.png`}
                                width={50}
                                height={50}
                                className="rounded-full mr-2"
                            />
                            <div className="flex flex-col text-sm">
                                <p>Admin</p>
                                <p>February 5, 2024</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="w-[70%] md:w-full md:flex md:flex-wrap md:justify-around my-5"
                        onClick={() => handleClick("slug1", 1)}
                        style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickable
                        >
                        <Image
                            src={`/img/4.png`}
                            alt={`ATM-master.png`}
                            width={1000}
                            height={1000}
                            className="mt-3 md:mt-0 object-cover rounded-md md:h-[300px] md:w-[200px] lg:w-[250px] lg:h-[350px]"
                        />
                        <div className="md:w-[500px] flex flex-col justify-evenly">
                            <div className="flex flex-col text-start mt-5">
                            <div className="flex flex-wrap">
                                <span className="text-red-800 text-sm font-semibold mr-2">AI</span>
                                <span className="text-red-800 text-sm font-semibold mr-2">News</span>
                                <span className="text-red-800 text-sm font-semibold mr-2">Software</span>
                            </div>
                            <h1 className="text-[15px] font-semibold mt-2">Manfaat & Dampak AI Generatif</h1>
                            <p className="text-sm my-2 text-justify md:text-start">
                                Manfaat & Dampak AI Generatif AI Generatif adalah cabang kecerdasan buatan (AI) yang berfokus pada…
                            </p>
                            </div>
                            <div className="flex flex-row justify-start items-center my-1">
                            <Image
                                src={`/atm/user1.png`}
                                alt={`ATM-master.png`}
                                width={50}
                                height={50}
                                className="rounded-full mr-2"
                            />
                            <div className="flex flex-col text-sm">
                                <p>Admin</p>
                                <p>February 5, 2024</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="w-[70%] md:w-full md:flex md:flex-wrap md:justify-around my-5"
                        onClick={() => handleClick("slug1", 1)}
                        style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickable
                        >
                        <Image
                            src={`/img/4.png`}
                            alt={`ATM-master.png`}
                            width={1000}
                            height={1000}
                            className="mt-3 md:mt-0 object-cover rounded-md md:h-[300px] md:w-[200px] lg:w-[250px] lg:h-[350px]"
                        />
                        <div className="md:w-[500px] flex flex-col justify-evenly">
                            <div className="flex flex-col text-start mt-5">
                            <div className="flex flex-wrap">
                                <span className="text-red-800 text-sm font-semibold mr-2">AI</span>
                                <span className="text-red-800 text-sm font-semibold mr-2">News</span>
                                <span className="text-red-800 text-sm font-semibold mr-2">Software</span>
                            </div>
                            <h1 className="text-[15px] font-semibold mt-2">Manfaat & Dampak AI Generatif</h1>
                            <p className="text-sm my-2 text-justify md:text-start">
                                Manfaat & Dampak AI Generatif AI Generatif adalah cabang kecerdasan buatan (AI) yang berfokus pada…
                            </p>
                            </div>
                            <div className="flex flex-row justify-start items-center my-1">
                            <Image
                                src={`/atm/user1.png`}
                                alt={`ATM-master.png`}
                                width={50}
                                height={50}
                                className="rounded-full mr-2"
                            />
                            <div className="flex flex-col text-sm">
                                <p>Admin</p>
                                <p>February 5, 2024</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="w-[70%] md:w-full md:flex md:flex-wrap md:justify-around my-5"
                        onClick={() => handleClick("slug1", 1)}
                        style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickable
                        >
                        <Image
                            src={`/img/4.png`}
                            alt={`ATM-master.png`}
                            width={1000}
                            height={1000}
                            className="mt-3 md:mt-0 object-cover rounded-md md:h-[300px] md:w-[200px] lg:w-[250px] lg:h-[350px]"
                        />
                        <div className="md:w-[500px] flex flex-col justify-evenly">
                            <div className="flex flex-col text-start mt-5">
                            <div className="flex flex-wrap">
                                <span className="text-red-800 text-sm font-semibold mr-2">AI</span>
                                <span className="text-red-800 text-sm font-semibold mr-2">News</span>
                                <span className="text-red-800 text-sm font-semibold mr-2">Software</span>
                            </div>
                            <h1 className="text-[15px] font-semibold mt-2">Manfaat & Dampak AI Generatif</h1>
                            <p className="text-sm my-2 text-justify md:text-start">
                                Manfaat & Dampak AI Generatif AI Generatif adalah cabang kecerdasan buatan (AI) yang berfokus pada…
                            </p>
                            </div>
                            <div className="flex flex-row justify-start items-center my-1">
                            <Image
                                src={`/atm/user1.png`}
                                alt={`ATM-master.png`}
                                width={50}
                                height={50}
                                className="rounded-full mr-2"
                            />
                            <div className="flex flex-col text-sm">
                                <p>Admin</p>
                                <p>February 5, 2024</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="w-[70%] md:w-full md:flex md:flex-wrap md:justify-around my-5"
                        onClick={() => handleClick("slug1", 1)}
                        style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickable
                        >
                        <Image
                            src={`/img/4.png`}
                            alt={`ATM-master.png`}
                            width={1000}
                            height={1000}
                            className="mt-3 md:mt-0 object-cover rounded-md md:h-[300px] md:w-[200px] lg:w-[250px] lg:h-[350px]"
                        />
                        <div className="md:w-[500px] flex flex-col justify-evenly">
                            <div className="flex flex-col text-start mt-5">
                            <div className="flex flex-wrap">
                                <span className="text-red-800 text-sm font-semibold mr-2">AI</span>
                                <span className="text-red-800 text-sm font-semibold mr-2">News</span>
                                <span className="text-red-800 text-sm font-semibold mr-2">Software</span>
                            </div>
                            <h1 className="text-[15px] font-semibold mt-2">Manfaat & Dampak AI Generatif</h1>
                            <p className="text-sm my-2 text-justify md:text-start">
                                Manfaat & Dampak AI Generatif AI Generatif adalah cabang kecerdasan buatan (AI) yang berfokus pada…
                            </p>
                            </div>
                            <div className="flex flex-row justify-start items-center my-1">
                            <Image
                                src={`/atm/user1.png`}
                                alt={`ATM-master.png`}
                                width={50}
                                height={50}
                                className="rounded-full mr-2"
                            />
                            <div className="flex flex-col text-sm">
                                <p>Admin</p>
                                <p>February 5, 2024</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col container mx-auto w-[80%] md:w-full lg:w-[30%]">
                    <div className="relative mb-10 mt-10" id="searchComponent">
                        <input
                            type="text"
                            className="w-full py-2 pl-4 pr-10 text-sm border rounded-lg focus:outline-none focus:border-blue-500 bg-slate-100"
                            placeholder="Search..."
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <MagnifyingGlassIcon className="w-5 h-5 text-hijau" />
                        </div>
                    </div>
                    <div className="my-5" id="recentPosts">
                        <h1 className="text-[11px] my-5 font-semibold text-hijau md:text-sm">RECENT POSTS</h1>
                        <p className="text-sm my-3 md:text-lg">Cybersecurity di Era Kemajuan Teknologi Artificial Intelligence</p>
                        <p className="text-sm my-3 md:text-lg">Cloud Computing: Masa Depan Teknologi</p>
                        <p className="text-sm my-3 md:text-lg">Cybersecurity di Era Kemajuan Teknologi Artificial Intelligence</p>
                        <p className="text-sm my-3 md:text-lg">Cloud Computing: Masa Depan Teknologi</p>
                    </div>

                    <div className="my-5" id="archives">
                        <h1 className="text-[11px] my-5 font-semibold text-hijau md:text-sm">ARCHIVES</h1>
                        <p className="text-sm my-3 md:text-lg">May 2024</p>
                        <p className="text-sm my-3 md:text-lg">April 2024</p>
                        <p className="text-sm my-3 md:text-lg">March 2024</p>
                        <p className="text-sm my-3 md:text-lg">February 2024</p>
                        <p className="text-sm my-3 md:text-lg">January 2024</p>
                        <p className="text-sm my-3 md:text-lg">December 2024</p>
                    </div>

                    <div className="my-5" id="categories">
                        <h1 className="text-[11px] my-5 font-semibold text-hijau md:text-sm">CATEGORIES</h1>
                        <p className="text-sm my-3 md:text-lg">AI</p>
                        <p className="text-sm my-3 md:text-lg">Automotive</p>
                        <p className="text-sm my-3 md:text-lg">Hardware</p>
                        <p className="text-sm my-3 md:text-lg">iOT</p>
                        <p className="text-sm my-3 md:text-lg">IT Development</p>
                        <p className="text-sm my-3 md:text-lg">IT Tips</p>
                        <p className="text-sm my-3 md:text-lg">News</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsInfo;