import React, { useState } from "react";
import {Icon} from '@iconify/react'
import { NAV_LINKS } from "../constants/navlinks";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return <div>
    <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <data className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black opacity-20 py-3 backdrop-blur-md lg:flex">
            <div className="flex justify-center gap-6">
                <a href="#">
                    <img src="https://t4.ftcdn.net/jpg/01/33/48/03/360_F_133480376_PWlsZ1Bdr2SVnTRpb8jCtY59CyEBdoUt.jpg" alt="logo" width={90} />
                </a>
            </div>

            <div>
                <ul className="flex items-center gap-4">
                    {NAV_LINKS.map((link, index) => (
                        <li key={index} className="block w-full text-xl">
                            <a className="text-sm hover:text-yellow-400" href={link.href} onClick={(e) => handleClick(e, link.href) }>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>


            <div className="rounded-lg backdrop-blur-md lg:hidden">
                <div className='flex items-center justify-center'>
                    <a href='#'>
                        <img src="" alt="logo" width={90} />
                    </a>
                </div>


                <div className="flex items-center">
                    <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <Icon icon="gridicons:cross" /> : <Icon icon="gridicons:cross" />}
                    </button>
                </div>
            </div>
        </data>
    </nav>
  </div>;
};

export default Navbar;
