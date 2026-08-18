import React from "react";
import Calendy from "./Calendly";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

const contactMethods = [
  {
    icon: <IoLogoWhatsapp size={25} />,
    href: "https://wa.me/33631995330",
    text: "Via WhatsApp",
    type: "external",
  },
  {
    icon: <LuPhoneCall size={25} />,
    href: "tel:+33674560112",
    text: "06 74 56 01 12",
    type: "internal",
  },
  {
    icon: <MdOutlineMailOutline size={25} />,
    href: "mailto:cocktail@event.com",
    text: "cocktail@event.com",
    type: "internal",
  },
];

const BookingFull = () => {
  return (
    <div
      id="all-booking-type-conainter"
      className="flex-1 lg:w-screen flex lg:flex-row flex-col"
    >
      <div
        id="whatsapp-containeur"
        className="flex flex-col flex-1 items-center justify-center w-full text-center"
      >
        <h2 className="p-8 py-8 mt-4 font-bold tracking-tight text-5xl pt-20 lg:pt-10 font-roboto text-black">
          Contactez-nous
        </h2>
        <p className="p-4 lg:w-[70%] lg:height-[40%] w-[85%] text:xl md:text-2xl leading-8 text-black">
          Pour obtenir un devis rapidement, il suffit de nous contacter via
          WhatsApp, par téléphone ou par email. Nous répondons à toutes vos
          questions et vous fournissons un devis en moins de 24h.
          <br /> <br /> Merci d’avance 
          <br /> <br /> Bar Events | Votre prestataire de bars à cocktails.
        </p>
        <div
          id="whatps-content"
          className="w-full h-full items-center flex flex-col justify-center mt-8 gap-y-8"
        >
          {contactMethods.map((method, index) => (
            <span
              key={index}
              className="bg-black text-white hover:bg-gray-800 flex items-center justify-center p-6 rounded-md gap-x-4 w-full max-w-64"
            >
              {method.icon}
              <a
                href={method.href}
                target={method.type === "external" ? "_blank" : "_self"}
                rel={method.type === "external" ? "noopener noreferrer" : ""}
                className="flex-1 text-center text-lg"
              >
                {method.text}
              </a>
            </span>
          ))}
        </div>
      </div>

      {/* <div
        id="calendy-containeur"
        className="flex flex-col lg:w-1/2 h-full mt-8 lg:mt-10"
      >
        <div
          id="calendy-content"
          className="w-full h-[100%] bg-transparent items-center flex justify-center"
        >
          <Calendy />
        </div>
      </div> */}
    </div>
  );
};

export default BookingFull;