import React from "react";
import Calendy from "./Calendly";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

const BookingFull = () => {
  return (
    <div
      id="all-booking-type-conainter"
      className="  h-auto lg:w-screen   flex lg:flex-row flex-col "
    >
      <div
        id="whatsapp-containeur"
        className=" flex flex-col h-full lg:h-screen   items-center justify-center  lg:w-1/2  text-center lg:mt-10"
      >
        {" "}
        <h2 className="p-8 py-8 mt-4 font-bold tracking-tight text-xl pt-20 lg:pt-10 font-oswald neon-title-green">
          Contactez-nous
        </h2>
        <p className="p-4 lg:w-[70%]  lg:height-[40%] w-[85%] leading-8 relative lg:-bottom-[2rem] neon-text-white">
          Pour obtenir un devis rapidement, il suffit de nous contacter via
          WhatsApp ou par telephone, email. Vous pouvez aussi directement
          resever via Calendly. Nous serons ravis de répondre a toute vos
          questions et de vous fournir un devis dans les plus bref délais.{" "}
          <br /> <br /> Merci d’avance ❤️
          <br /> <br /> Bar Events | Votre prestataire de bars à cocktails.
        </p>
        <div
          id="whatps-content"
          className=" w-full h-full   items-center flex flex-col justify-center mt-8 gap-y-4 lg:relative lg:top-[20px]"
        >
          <span
            className=" neon-button bg-neon hover:text-black flex items-center justify-center p-4 rounded-md gap-x-4 w-[30%] min-w-[270px] "
         
          >
            {" "}
            <IoLogoWhatsapp size={25} />
            <a
              href="https://wa.me/33631995330"
              target="_blank"
              rel="noopener noreferrer"
            >
              Via WhatsApp
            </a>
          </span>
          <span className=" flex items-center justify-center p-4 rounded-md gap-x-4 neon-button hover:text-black  bg-neon w-[30%] min-w-[270px]">
            {" "}
            <LuPhoneCall size={25} />
            <a href="tel:+33631995330">06 31 99 53 30</a>
          </span>
          <span className=" flex items-center justify-center p-4 rounded-md gap-x-4 neon-button hover:text-black  bg-neon w-[30%]  min-w-[270px]">
            {" "}
            <MdOutlineMailOutline size={25} />
            <a href="mailto:cocktail@event.com">cocktail@event.com</a>
          </span>
        </div>
      </div>

      <div
        id="calendy-containeur"
        className=" flex flex-col lg:w-1/2 h-full  mt-8  lg:mt-10 "
      >
        <div
          id="calendy-content"
          className=" w-full h-[100%] bg-transparent items-center flex justify-center"
        >
          <Calendy />
        </div>
      </div>
    </div>
  );
};

export default BookingFull;
