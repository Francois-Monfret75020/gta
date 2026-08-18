import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer-container" className="flex flex-col justify-center  md:h-[26rem] h-[47rem]  w-full  gap-y-10 bg-white">
      <div className="flex flex-col sm:flex-row  sm:justify-around w-full ">
        <section id="contact" className="flex flex-col text-gray-500   mb-1 p-4 gap-y-3 ">
          <div className="font-light text-gray-500 text-xl mb-1 text-black">CONTACT</div>
          <div className="flex  gap-4 text-gray-500 ">
            <Link href={"test"} className="hover:text-black">
              {" "}
              <AiFillTikTok size="1.4rem" />
            </Link>
            <Link href={"test"} className="hover:text-black">
              {" "}
              <FaInstagram size="1.4rem" />
            </Link>
            <Link href={"test"} className="hover:text-black">
              {" "}
              <FaFacebook size="1.4rem" />
            </Link>
          </div>
          <Link
            href="tel:+33674560112"
            className="font-normal text-base  w-[35%] footer:w-[60%] min-w-[11rem] hover:text-black"
          >
            06 74 56 01 12
          </Link>
          <Link
            href="mailto:cocktail-envents@gmail.com"
            className="font-normal text-base  w-[57%] min-w-[11rem] footer:w-[100%] hover:text-black"
          >
            cocktail-envents@gmail.com
          </Link>
        </section>

        <section id="pages" className="flex flex-col mb-4 md:mb-0 p-4  gap-y-3">
          <div className="font-light text-xl   mb-1  text-black">PAGES</div>
          <Link
            href="/prestation"
            className="font-normal text-base w-[30%] text-gray-500 hover:text-black"
          >
            Presations
          </Link>
          <Link
            href="/info"
            className="font-normal text-base w-[30%] text-gray-500 hover:text-black"
          >
            Equipe
          </Link>
          <Link
            href="/booking"
            className="font-normal text-base w-[30%] text-gray-500 hover:text-black"
          >
            Booking
          </Link>
        </section>

        <section id="prestations" className="flex flex-col p-4 text-gray-500 gap-y-3">
          <div className="font-light text-xl mb-1  text-black">PRESTATIONS</div>
          <Link
            href="/prestation/mariage"
            className="font-normal text-base w-[30%] hover:text-black "
          >
            Mariage
          </Link>
          <Link
            href="/prestation/privatisation"
            className="font-normal text-base w-[30%] hover:text-black "
          >
            Privatisation
          </Link>
          <Link
            href="/prestation/entreprise"
            className="font-normal text-base w-[52%] min-w-[9rem] footer:w-[100%] hover:text-black"
          >
            Entreprise Team Building
          </Link>
          <Link
            href="/prestation/atelier"
            className="font-normal text-base w-[30%] min-w-[6rem] footer:w-[100%] hover:text-black"
          >
            Atelier Cocktail
          </Link>
          <Link
            href="/prestation/piano-bar"
            className="font-normal text-base w-[30%] footer:w-[100%] hover:text-black"
          >
            Piano-bar
          </Link>
        </section>
      </div>
      <section
        id="mention-cookie"
        className="  flex justify-center  items-center h-20 gap-x-8"
      >
        <Link
          href="/mentions"
          className="font-normal  text-gray-500  text-xs  hover:text-black"
        >
          Mentions légales
        </Link>
        <p>-</p>
        <Link
          href="/cookie"
          className="font-normal  text-gray-500 text-xs hover:text-black"
        >
          Cookie
        </Link>
      </section>
    </div>
  );
};

export default Footer;
