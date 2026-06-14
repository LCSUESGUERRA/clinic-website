"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl tracking-wide hover:opacity-80 transition"
        >
          AESTHETIC CLINIC
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">

          <Link href="/" className="hover:text-[#c8b08a] transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#c8b08a] transition">
            About
          </Link>

          <Link href="/services" className="hover:text-[#c8b08a] transition">
            Services
          </Link>

          <Link href="/doctors" className="hover:text-[#c8b08a] transition">
            Doctors
          </Link>

          <Link href="/gallery" className="hover:text-[#c8b08a] transition">
            Gallery
          </Link>

          <Link href="/contact" className="hover:text-[#c8b08a] transition">
            Contact
          </Link>

        </div>

        {/* Desktop CTA */}
        <Link
          href="/appointment"
          className="hidden md:block bg-black text-white px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-[#d9c9b2] hover:text-black transition-all duration-300"
        >
          Book Appointment
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5 shadow-lg">

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#c8b08a]"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#c8b08a]"
          >
            About
          </Link>

          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#c8b08a]"
          >
            Services
          </Link>

          <Link
            href="/doctors"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#c8b08a]"
          >
            Doctors
          </Link>

          <Link
            href="/gallery"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#c8b08a]"
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#c8b08a]"
          >
            Contact
          </Link>

          <Link
            href="/appointment"
            onClick={() => setIsOpen(false)}
            className="bg-black text-white text-center py-3 rounded-xl hover:bg-[#d9c9b2] hover:text-black transition"
          >
            Book Appointment
          </Link>

        </div>
      )}

    </nav>
  );
}