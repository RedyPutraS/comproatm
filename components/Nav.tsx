import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
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
                    <li><a className="nav__link" href="#">Home</a></li>
                    <li><a className="nav__link" href="#">About Us</a></li>
                    <li><a className="nav__link" href="#">Services & Projects</a></li>
                    <li><a className="nav__link" href="#">Client</a></li>
                    <li><a className="nav__link" href="#"><Image src={"/img/atm-master1.png"} alt="ATM-master.png" width={100} height={100} /></a></li>
                    <li><a className="nav__link" href="#">Partners</a></li>
                    <li><a className="nav__link" href="#">Career</a></li>
                    <li><a className="nav__link" href="#">News & Info</a></li>
                    <li><a className="nav__link" href="#">Contact us</a></li>
                </ul>
                <Bars3CenterLeftIcon onClick={openNav} className={`w-[2.3rem] lg:hidden h-[2.3rem] rotate-180 ${fontNav}`}/>
            </div>
        </div>
    )
}

export default Nav;