import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const NavMobile = ({ closeNav, showNav }: Props) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            closeNav();
        };

        router.events.on("routeChangeStart", handleRouteChange);
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router, closeNav]);

    const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div>
            <div className={`fixed top-0 ${navOpenStyle} transform transition-all duration-300 delay-200 left-0 right-0 bottom-0 bg-[#579b89] opacity-70 w-[100vw] h-[100vh]`}></div>
            <ul className={`text-white ${navOpenStyle} fixed flex items-center flex-col h-[100%] justify-center transition-all duration-300 delay-100 w-[60%] bg-[#1F2C56] space-y-14 z-[10006]`}>
                <li><Link className="nav__link text-[15px] md:text-[20px]" href={"/"}>Home</Link></li>
                <li><Link className="nav__link text-[15px] md:text-[20px]" href={"/about"}>About Us</Link></li>
                <li><Link className="nav__link text-[15px] md:text-[20px]" href={"/services-projects"}>Services & Projects</Link></li>
                <li><Link className="nav__link text-[15px] md:text-[20px]" href="/clients">Client</Link></li>
                <li><Link className="nav__link text-[15px] md:text-[20px]" href="/partners">Partners</Link></li>
                <li><Link className="nav__link text-[15px] md:text-[20px]" href="/career">Career</Link></li>
                <li><Link className="nav__link text-[15px] md:text-[20px]" href="/newsinfo">News & Info</Link></li>
                <li><Link className="nav__link text-[15px] md:text-[20px]" href="/contact-us">Contact us</Link></li>
                <XMarkIcon onClick={closeNav} className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem]" />
            </ul>
        </div>
    );
}

export default NavMobile;
