import HeroComponent from "@/components/HeroComponent";
import Popup from "@/components/PopUp";
import Image from "next/image";
import React, { useState } from "react";

const Clients: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedDescription, setSelectedDescription] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleDivClick = (imageSrc: string, description: string, title: string) => {
        setSelectedTitle(title);
        setSelectedImage(imageSrc);
        setSelectedDescription(description);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedTitle(null);
        setSelectedImage(null);
        setSelectedDescription(null);
    };

    return (
        <div>
            <HeroComponent text={"Our Satisfied Clients"} urlImage={'/img/g21.jpg'} textButton="" urlButton="#" useButton={false}/>
            {/* <section className="flex flex-col justify-center items-center h-[400px] bg-gray-400 text-white">
                <h1 className="text-[35px] md:text-[50px] font-semibold text-center">Our Satisfied Clients</h1>
                <p className="text-[15px] md:text-lg">Here are some of clients, be one of us! Let’s talk</p>
            </section> */}

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container text-center gap-2 my-2 mx-auto md:mx-auto">
                {[
                    { src: "/atm/1.png", title: "Kampus Kita", description: "Deskripsi gambar 1" },
                    { src: "/atm/2.png", title: "SGPP", description: "Deskripsi gambar 2" },
                    { src: "/atm/3.png", title: "UBP Kerawang", description: "Deskripsi gambar 3" },
                    { src: "/atm/4.png", title: "Bank Mega", description: "Deskripsi gambar 4" },
                    { src: "/atm/5.png", title: "Lotte", description: "Deskripsi gambar 5" },
                    { src: "/atm/6.png", title: "MCCI", description: "Deskripsi gambar 6" },
                    { src: "/atm/7.png", title: "Krakatau", description: "Deskripsi gambar 7" },
                    { src: "/atm/8.png", title: "Ancora", description: "Deskripsi gambar 8" },
                    { src: "/atm/9.png", title: "The Maj Groud", description: "Deskripsi gambar 9" },
                    { src: "/atm/10.png", title: "MNK", description: "Deskripsi gambar 10" },
                    { src: "/atm/11.png", title: "CARAKA", description: "Deskripsi gambar 11" },
                    { src: "/atm/12.png", title: "Pinvest", description: "Deskripsi gambar 12" },
                    { src: "/atm/13.png", title: "Ancora Foundation", description: "Deskripsi gambar 13" },
                    { src: "/atm/14.png", title: "Pajak", description: "Deskripsi gambar 14" },
                    { src: "/atm/15.png", title: "Klik UMKM", description: "Deskripsi gambar 15" },
                    { src: "/atm/16.png", title: "Senayan NAtional", description: "Deskripsi gambar 16" },
                    { src: "/atm/17.png", title: "The Maj Oceanic", description: "Deskripsi gambar 17" },
                    { src: "/atm/18.png", title: "Bali National", description: "Deskripsi gambar 18" },
                ].map((item, index) => (
                    <div key={index}>
                        <div className="flex flex-col mx-5 relative h-[250px]" onClick={() => handleDivClick(item.src, item.description, item.title)}>
                            <Image
                                src={item.src}
                                alt={`ATM-master-${index + 1}.png`}
                                width={1000}
                                height={1000}
                                className="w-full h-full object-contain p-5 -mt-4"
                            />
                            <div className="bg-black w-full text-white text-center absolute bottom-0 h-8">
                                <p>{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {selectedImage && selectedDescription && selectedTitle && (
                    <Popup
                        title={selectedTitle}
                        isOpen={isPopupOpen}
                        onClose={closePopup}
                        imageSrc={selectedImage}
                        description={selectedDescription}
                    />
                )}
            </section>
        </div>
    );
};

export default Clients;
