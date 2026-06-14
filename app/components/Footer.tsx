import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* CTA SECTION */}

      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage:
            "url('/images/cta-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}

        <div className="absolute inset-0 bg-black/70"></div>

        {/* Decorative Circle */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="w-[900px] h-[900px] border border-white/10 rounded-full"></div>

        </div>

        {/* Content */}

        <div className="relative z-10 max-w-4xl mx-auto text-center px-8 text-white">

          <p className="uppercase tracking-[8px] text-sm mb-6">
            Ready To Transform?
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Book Your Consultation
            <br />
            Today
          </h2>

          <p className="text-lg text-gray-200 mb-10">
            Let our specialists create a personalized
            treatment plan tailored specifically for you.
          </p>

          <Link
            href="/appointment"
            className="inline-block bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-[#d9c9b2] transition-all duration-300"
          >
            Book Appointment
          </Link>

        </div>
      </section>

      {/* Divider */}

      <div className="h-[2px] bg-gradient-to-r from-[#d9c9b2] via-white to-[#d9c9b2]" />

      {/* FOOTER */}

      <footer className="bg-black text-white pt-16 pb-8">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-bold mb-4">
              AESTHETIC CLINIC
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Premium aesthetic treatments designed
              to help you look and feel your absolute best.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="font-semibold text-lg mb-5">
              Quick Links
            </h4>

            <div className="space-y-3 text-gray-400">

              <Link
                href="/"
                className="block hover:text-white transition"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block hover:text-white transition"
              >
                About
              </Link>

              <Link
                href="/services"
                className="block hover:text-white transition"
              >
                Services
              </Link>

              <Link
                href="/doctors"
                className="block hover:text-white transition"
              >
                Doctors
              </Link>

              <Link
                href="/gallery"
                className="block hover:text-white transition"
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className="block hover:text-white transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="font-semibold text-lg mb-5">
              Contact
            </h4>

            <div className="space-y-3 text-gray-400">

              <p>
                📍 Manila, Philippines
              </p>

              <p>
                📞 +63 912 345 6789
              </p>

              <p>
                ✉️ clinic@email.com
              </p>

            </div>

            <div className="mt-8">

              <h4 className="font-semibold text-lg mb-4">
                Follow Us
              </h4>

              <div className="flex gap-4 text-xl">

                <a href="#">
                  <FaFacebookF />
                </a>

                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaTiktok />
                </a>

              </div>

            </div>

          </div>

          {/* Business Hours */}

          <div>

            <h4 className="font-semibold text-lg mb-5">
              Business Hours
            </h4>

            <div className="space-y-3 text-gray-400">

              <div>
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>

              <div>
                <p>Saturday</p>
                <p>9:00 AM - 5:00 PM</p>
              </div>

              <div>
                <p>Sunday</p>
                <p>Closed</p>
              </div>

            </div>

          </div>

        </div>

        {/* Copyright */}

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">

          © 2026 Aesthetic Clinic. All Rights Reserved.

        </div>

      </footer>
    </>
  );
}