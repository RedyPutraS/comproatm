import HeroComponent from "@/components/HeroComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Partners = () => {
    return (
        <div className="overflow-hidden">
            <HeroComponent text="Our Partners" urlImage="/img/a11.jpg" textButton="-" urlButton="#" useButton={false}/>
            <div className="container mx-auto mt-14 mb-14">
                <section className="flex flex-wrap justify-center">
                    <div className="w-[300px] md:w-[350px] lg:w-[300px] h-[100px] md:my-7">
                        <Link href={"#"}>
                            <Image
                                src={"/atm/partners1.png"}
                                alt="ATM-master.png"
                                width={1000}
                                height={1000}
                                className="m-2 w-full h-full object-contain"
                            />
                        </Link>
                    </div>
                    <div className="w-[300px] md:w-[350px] lg:w-[300px] h-[100px] md:my-7">
                        <Link href={"#"}>
                            <Image
                                src={"/atm/partners2.png"}
                                alt="ATM-master.png"
                                width={1000}
                                height={1000}
                                className="m-2 w-full h-full object-contain"
                            />
                        </Link>
                    </div>
                    <div className="w-[300px] md:w-[350px] lg:w-[300px] h-[100px] md:my-7">
                        <Link href={"#"}>
                            <Image
                                src={"/atm/partners3.png"}
                                alt="ATM-master.png"
                                width={1000}
                                height={1000}
                                className="m-2 w-full h-full object-contain"
                            />
                        </Link>
                    </div>
                    <div className="w-[300px] md:w-[350px] lg:w-[300px] h-[100px] md:my-7">
                        <Link href={"#"}>
                            <Image
                                src={"/atm/partners4.png"}
                                alt="ATM-master.png"
                                width={1000}
                                height={1000}
                                className="m-2 w-full h-full object-contain"
                            />
                        </Link>
                    </div>
                    <div className="w-[300px] md:w-[350px] lg:w-[300px] h-[100px] md:my-7">
                        <Link href={"#"}>
                            <Image
                                src={"/atm/partners5.png"}
                                alt="ATM-master.png"
                                width={1000}
                                height={1000}
                                className="m-2 w-full h-full object-contain"
                            />
                        </Link>
                    </div>
                    <div className="w-[300px] md:w-[350px] lg:w-[300px] h-[100px] md:my-7">
                        <Link href={"#"}>
                            <Image
                                src={"/atm/partners6.png"}
                                alt="ATM-master.png"
                                width={1000}
                                height={1000}
                                className="m-2 w-full h-full object-contain"
                            />
                        </Link>
                    </div>
                    <div className="w-[300px] md:w-[350px] lg:w-[300px] h-[100px] md:my-7">
                        <Link href={"#"}>
                            <Image
                                src={"/atm/partners7.png"}
                                alt="ATM-master.png"
                                width={1000}
                                height={1000}
                                className="m-2 w-full h-full object-contain"
                            />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Partners;