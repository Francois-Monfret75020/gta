"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlyOutLink from "../../ui/FlyOutLink";
import FlyOutMenu from "../../ui/FlyOutMenu";
import Curve from "./Curve";
import Hamburger from "hamburger-react";
import NavNeonBtn from "../../ui/NavNeonBtn";
import NavNeonBtnDesktop from "../../ui//NavNeonBtnDesktop";
import { menuSlide, linkAnimation } from "../../anim/curveAnim";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import "./style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [linkEffect, setlinkEffect] = useState(false);
  const [linkEffect2, setlinkEffect2] = useState(false);
  const [linkEffect3, setlinkEffect3] = useState(false);
  const [gameNavigation, setGameNavigation] = useState("");

  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const pathname = usePathname();



const handleClickNav = () => {
  setGameNavigation("test")
  
  }


  const toggleOpen = () => {
    setOpen(!isOpen);
    zeroScroll();
  };

  const zeroScroll = () => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";

    } else {
      document.body.style.overflow = "auto";
 
    }
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div
        className="bg-greeno top-8 right-4 h-12 w-12 flex items-center justify-center z-50 rounded-full fixed md:hidden"
        ref={hamburgerRef}
        onClick={zeroScroll}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={19}
          className="flex justify-center items-center"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={navRef}
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed flex h-[100vh] bg-black bg-opacity-90 text-white items-center justify-around flex-col w-full  top-0 left-0"
          >
            <div className="flex items-center justify-start h-[10%] text-gray-500 border-b border-gray-500 w-[80%]">
              <Link href="/" className={clsx()} onClick={toggleOpen}>
                Home
              </Link>
            </div>

            <div className="flex mb:justify-around justify-center items-center h-[20%] sm:w-[80%] w-[100%] flex-col text-xl gap-8 relative">
              <motion.div {...linkAnimation} className="opacity-100">
                <FlyOutLink
                  FlyOutContent={FlyOutMenu}
                  toggleOpen={toggleOpen}
                  name={"Vos prestation"}
                  href={"/prestation"}
                
                  nav={gameNavigation}
                />
              </motion.div>

              <motion.div {...linkAnimation}>
                <NavNeonBtn
                  href="/bar"
                  toggleOpen={toggleOpen}
                  text={"Vos Bars"}
                 
                OnClickNav={handleClickNav}
                  
                />
              </motion.div>
              <motion.div {...linkAnimation}>
                <NavNeonBtn
                  href="/info"
                  toggleOpen={toggleOpen}
                  text={"Notre Histoire"}
                 
              
                />
              </motion.div>

              <motion.div {...linkAnimation}>
                <NavNeonBtn
                  href="/booking"
                  toggleOpen={toggleOpen}
                  text={"Booking"}
                 
                  
                />
              </motion.div>
            </div>
            <div className="flex text-xs gap-8 items-center">
              <motion.div {...linkAnimation} className="flex items-center gap-1">
                <AiFillTikTok size="1.4rem" />
                <Link href="/none" onClick={toggleOpen}>
                  Tik Tok
                </Link>
              </motion.div>
              <motion.div {...linkAnimation} className="flex items-center gap-1">
                <FaInstagram size="1.4rem" />
                <Link href="/none" onClick={toggleOpen}>
                  Instagram
                </Link>
              </motion.div>
              <motion.div {...linkAnimation} className="flex items-center gap-1">
                <FaFacebook size="1.4rem" />
                <Link href="/none" onClick={toggleOpen}>
                  Facebook
                </Link>
              </motion.div>
            </div>
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <div
        className="hidden md:flex w-full items-center h-[9vh] min-h-[2.5rem] bg-black text-white"
        style={{ zIndex: 50 }}
      >
        <div className="flex w-full items-center justify-center py-4 px-8">
          <Link href="/" className="text-lg font-bold w-[20%]">
            Class Cocktails
          </Link>
          <div className="flex justify-around lg:justify-center items-center w-full">
            <div>
              <FlyOutLink FlyOutContent={FlyOutMenu} name={"Prestations"} />
            </div>
            <div
              className="flex justify-center items-center w-[20%]"
              onMouseEnter={() => setlinkEffect(true)}
              onMouseLeave={() => setlinkEffect(false)}
            >
              <NavNeonBtnDesktop href="/bar" text="Bars" event={linkEffect} />
            </div>
            <div
              className="flex justify-center items-center w-[20%]"
              onMouseEnter={() => setlinkEffect2(true)}
              onMouseLeave={() => setlinkEffect2(false)}
            >
              <NavNeonBtnDesktop href="/info" text="Notre histoire" event={linkEffect2} />
            </div>
            <div
              className="flex justify-center items-center w-[20%]"
              onMouseEnter={() => setlinkEffect3(true)}
              onMouseLeave={() => setlinkEffect3(false)}
            >
              <NavNeonBtnDesktop href="/booking" text="Booking" event={linkEffect3} />
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Link className="neon-logo-tik-tok" href="/resaux">
              <AiFillTikTok size="1.6rem" />
            </Link>
            <Link className="neon-logo" href="/resaux">
              <FaInstagram size="1.6rem" />
            </Link>
            <Link className="neon-logo" href="/resaux">
              <FaFacebook size="1.4rem" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;