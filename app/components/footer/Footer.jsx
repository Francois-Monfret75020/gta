import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer-container" className="flex flex-col   w-full  gap-y-10 ">
      <div className="flex flex-col sm:flex-row  sm:justify-around w-full ">
        <section id="contact" className="flex flex-col text-gray-500   mb-1 p-4 gap-y-3 ">
          <div className="font-light text-gray-500 text-xl mb-1 neon-text">CONTACT</div>
          <div className="flex  gap-4 text-gray-500 ">
            <Link href={"test"} className="hover:text-neon ">
              {" "}
              <AiFillTikTok size="1.4rem" />
            </Link>
            <Link href={"test"} className="hover:text-neon ">
              {" "}
              <FaInstagram size="1.4rem" />
            </Link>
            <Link href={"test"} className="hover:text-neon ">
              {" "}
              <FaFacebook size="1.4rem" />
            </Link>
          </div>
          <Link
            href="tel:+3356869362"
            className="font-normal text-xs  w-[35%] footer:w-[60%] min-w-[11rem] hover:text-greeno"
          >
            06 56 86 93 62
          </Link>
          <Link
            href="mailto:cocktail-envents@gmail.com"
            className="font-normal text-xs   w-[57%] min-w-[11rem] footer:w-[100%] hover:text-greeno"
          >
            cocktail-envents@gmail.com
          </Link>
        </section>

        <section id="pages" className="flex flex-col mb-4 md:mb-0 p-4  gap-y-3">
          <div className="font-light text-xl   mb-1  neon-text">PAGES</div>
          <Link
            href="/prestation"
            className="font-normal text-xs w-[30%] text-gray-500 hover:text-greeno"
          >
            Presations
          </Link>
          <Link
            href="/info"
            className="font-normal text-xs w-[30%] text-gray-500 hover:text-greeno"
          >
            Equipe
          </Link>
          <Link
            href="/booking"
            className="font-normal text-xs w-[30%] text-gray-500 hover:text-greeno"
          >
            Booking
          </Link>
        </section>

        <section id="prestations" className="flex flex-col p-4 text-gray-500 gap-y-3">
          <div className="font-light text-xl mb-1  neon-text">PRESTATIONS</div>
          <Link
            href="/prestation/mariage"
            className="font-normal text-xs w-[30%] hover:text-greeno "
          >
            Mariage
          </Link>
          <Link
            href="/prestation/privatisation"
            className="font-normal text-xs w-[30%] hover:text-greeno "
          >
            Privatisation
          </Link>
          <Link
            href="/prestation/entreprise"
            className="font-normal text-xs w-[52%] min-w-[9rem] footer:w-[100%] hover:text-greeno"
          >
            Entreprise Team Building
          </Link>
          <Link
            href="/prestation/atelier"
            className="font-normal text-xs w-[30%] min-w-[6rem] footer:w-[100%] hover:text-greeno"
          >
            Atelier Cocktail
          </Link>
          <Link
            href="/prestation/piano-bar"
            className="font-normal text-xs w-[30%] footer:w-[100%] hover:text-greeno"
          >
            Piano-bar
          </Link>
        </section>
      </div>
      <section
        id="mention-cookie"
        className="  flex justify-center  items-center gap-x-8"
      >
        <Link
          href="/mentions"
          className="font-normal  text-gray-500  text-xs  hover:text-greeno"
        >
          Mentions légales
        </Link>
        <p>-</p>
        <Link
          href="/cookie"
          className="font-normal  text-gray-500 text-xs hover:text-greeno"
        >
          Cookie
        </Link>
      </section>
    </div>
  );
};

export default Footer;
