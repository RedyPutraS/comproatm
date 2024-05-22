import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
    openNav :() => void
}

const Nav = ({openNav}:Props) => {

    const [navSticky, setNavSticky] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavSticky(true)
            }
            if (window.scrollY<=90) {
                setNavSticky(false)
            }
        }
        window.addEventListener("scroll", handler);
    }, []);

    const stickyStyle = navSticky?'bg-white shadow-gray-300 shadow-md' : '';
    const fontNav = navSticky?'text-biru' : 'text-white';
    const heightNav = navSticky?'h-[9vh] md:h-[7vh] lg:h-[11vh]' : 'h-[11vh] md:h-[10vh] lg:h-[15vh]';

    return (
        <div className={`fixed w-[100%] ${stickyStyle} transition-all duration-700 z-[1000]`}>
            <div className={`flex items-center ${heightNav} transition-all duration-700 lg:justify-center justify-between w-[80%] mx-auto`}>
                <Image src={"/img/atm-master1.png"} alt="ATM-master.png" width={100} height={100} className="lg:hidden w-[80px] md:w-[110px]" />
                <ul className={`${fontNav} transition-all duration-700 lg:flex hidden items-center space-x-10`}>
                    <li><Link href={"/"} className="nav__link">Home</Link></li>
                    <li><Link href={"/about"}className="nav__link">About Us</Link></li>
                    <li><Link href={"services-projects"}className="nav__link">Services & Projects</Link></li>
                    <li><Link href={"#"}className="nav__link">Client</Link></li>
                    <li><Link href={"#"}className="nav__link"><Image src={"/img/atm-master1.png"} alt="ATM-master.png" width={100} height={100} /></Link></li>
                    <li><Link href={"#"}className="nav__link">Partners</Link></li>
                    <li><Link href={"#"}className="nav__link">Career</Link></li>
                    <li><Link href={"#"}className="nav__link">News & Info</Link></li>
                    <li><Link href={"#"}className="nav__link">Contact us</Link></li>
                </ul>
                <Bars3CenterLeftIcon onClick={openNav} className={`w-[2.3rem] lg:hidden h-[2.3rem] rotate-180 ${fontNav}`}/>
            </div>
        </div>
    )
}

export default Nav;