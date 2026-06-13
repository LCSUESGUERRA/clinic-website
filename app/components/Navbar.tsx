"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <div className="font-bold text-xl tracking-wide">
          AESTHETIC CLINIC
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/doctors">Doctors</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>

        </div>

        {/* Desktop Button */}
        <Link
          href="/appointment"
          className="hidden md:block bg-black text-white px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-[#d9c9b2] hover:text-black transition-all duration-300"
        >
          Book Appointment
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (

        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-4">

          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>

          <Link href="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>

          <Link href="/doctors" onClick={() => setIsOpen(false)}>
            Doctors
          </Link>

          <Link href="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <Link
            href="/appointment"
            onClick={() => setIsOpen(false)}
            className="bg-black text-white text-center py-3 rounded-xl"
          >
            Book Appointment
          </Link>

        </div>

      )}

    </nav>
  );
}