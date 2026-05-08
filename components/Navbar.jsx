"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Journey",
    "Contact"
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          <div className="flex items-center gap-3">

  <div className="relative w-14 h-14">

    <Image
      src="/image/PNG_1-removebg-preview.png"
      alt="Logo"
      fill
      sizes="56px"
      className="object-contain"
      priority
    />

  </div>

  <h1 className="text-2xl font-bold text-white">
    Shri Om Logistic
  </h1>

</div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition"
              >
                {link}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold"
            >
              Contact Us
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="flex flex-col px-6 py-4 gap-5">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-yellow-500 text-center text-black py-3 rounded-full font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}