"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlyOutLink from "../../ui/FlyOutLink";
import FlyOutMenu from "../../ui/FlyOutMenu";
import Curve from "./Curve";
import Hamburger from "hamburger-react";
import NavButtonMobile from "../../ui/MobileNavButton";
import NavButtonDesktop from "../../ui/NavButtonDesktop";
import { menuSlide, linkAnimation } from "../../anim/curveAnim";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import "./style.css";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const [linkEffect, setlinkEffect] = useState(false);
  const [linkEffect2, setlinkEffect2] = useState(false);
  const [linkEffect3, setlinkEffect3] = useState(false);

  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

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
        className="bg-black top-8 right-4 h-12 w-12 flex items-center justify-center z-50 rounded-full fixed lg:hidden "
        ref={hamburgerRef}
        onClick={zeroScroll}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={19}
          color="#ffffff"
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
            className="fixed flex h-[100vh] bg-white bg-opacity-95 text-black items-center justify-around flex-col w-full  top-0 left-0"
          >
            <div className="flex items-center justify-start h-[10%] text-gray-500 border-b border-gray-500 w-[80%] mb-10">
              <Link href="/" onClick={toggleOpen}>
                Home
              </Link>
            </div>

            <div className="flex mb:justify-around justify-center   items-center h-[20%] sm:w-[80%] w-[100%] flex-col text-xl gap-6 relative">
              <motion.div {...linkAnimation} className="opacity-100  z-50">
                <FlyOutLink
                  FlyOutContent={FlyOutMenu}
                  toggleOpen={toggleOpen}
                  name={"Nos prestations"}
                  href={"/prestation"}
                  isNavbarOpen={isOpen}
                />
              </motion.div>

              <motion.div {...linkAnimation}>
                <NavButtonMobile
                  href="/bar"
                  toggleOpen={toggleOpen}
                  text={"Vos Bars"}
                />
              </motion.div>
              <motion.div {...linkAnimation}>
                <NavButtonMobile
                  href="/info"
                  toggleOpen={toggleOpen}
                  text={"Notre Histoire"}
                />
              </motion.div>

              <motion.div {...linkAnimation}>
                <NavButtonMobile
                  href="/booking"
                  toggleOpen={toggleOpen}
                  text={"Booking"}
                />
              </motion.div>
            </div>
            <div className="flex text-xs gap-8 items-center mb-10 h-[20%]">
              <motion.div
                {...linkAnimation}
                className="flex items-center text-black gap-1"
              >
                <AiFillTikTok size="1.4rem" />
                <Link href="/none" onClick={toggleOpen}>
                  Tik Tok
                </Link>
              </motion.div>
              <motion.div
                {...linkAnimation}
                className="flex items-center text-black gap-1"
              >
                <FaInstagram size="1.4rem" />
                <Link href="/none" onClick={toggleOpen}>
                  Instagram
                </Link>
              </motion.div>
              <motion.div
                {...linkAnimation}
                className="flex items-center text-black  gap-1"
              >
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
        className="hidden lg:flex w-full items-center h-[9vh] min-h-[2.5rem] bg-white border-b border-black/10 text-black"
        style={{ zIndex: 50 }}
      >
        <div className="flex w-full items-center justify-center py-4 px-8">
          <Link href="/" className="text-lg font-bold">
            Class Cocktails
          </Link>
          <div className="flex justify-center text-xl items-center w-full gap-x-[5%]">
            <div>
              <FlyOutLink
                FlyOutContent={(props) => (
                  <FlyOutMenu {...props} variant="desktop" />
                )}
                name={"Prestations"}
                toggleOpen={toggleOpen}
              />
            </div>
            <div
              className="flex justify-center items-center "
              onMouseEnter={() => setlinkEffect(true)}
              onMouseLeave={() => setlinkEffect(false)}
            >
              <NavButtonDesktop href="/bar" text="Bars" event={linkEffect} />
            </div>
            <div
              className="flex justify-center items-center "
              onMouseEnter={() => setlinkEffect2(true)}
              onMouseLeave={() => setlinkEffect2(false)}
            >
              <NavButtonDesktop href="/info" text="info" event={linkEffect2} />
            </div>
            <div
              className="flex justify-center items-center "
              onMouseEnter={() => setlinkEffect3(true)}
              onMouseLeave={() => setlinkEffect3(false)}
            >
              <NavButtonDesktop
                href="/booking"
                text="Booking"
                event={linkEffect3}
              />
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Link
              className="text-black/60 hover:text-black transition-colors"
              href="/resaux"
            >
              <AiFillTikTok size="1.6rem" />
            </Link>
            <Link
              className="text-black/60 hover:text-black transition-colors"
              href="/resaux"
            >
              <FaInstagram size="1.6rem" />
            </Link>
            <Link
              className="text-black/60 hover:text-black transition-colors"
              href="/resaux"
            >
              <FaFacebook size="1.4rem" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
