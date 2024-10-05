"use client";

import { usePathname } from "next/navigation";
import BookingButton from "../ui/BookingButton";

const ConditionalBookingButton = () => {
  const pathname = usePathname();

  if (pathname === '/booking') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-transparent opacity-80 lg:top-auto lg:bottom-6 flex">
      <BookingButton text="BOOKING" />
    </div>
  );
};

export default ConditionalBookingButton;