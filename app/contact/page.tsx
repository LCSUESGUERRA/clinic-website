import Navbar from "../components/Navbar";
import Link from "next/link";


export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="relative bg-[#f8f5f0] pt-40 pb-20 overflow-hidden">

        {/* Background Effects */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#e9ddc8] rounded-full blur-3xl opacity-40"></div>

        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#f0e8db] rounded-full blur-3xl opacity-40"></div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-[#d9c9b2] rounded-full opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">

          {/* Hero Banner */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden mb-20">

            <img
              src="/images/contact-banner.jpg"
              alt="Contact Us"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-8">

              <p className="uppercase tracking-[6px] text-sm mb-4">
                Contact Us
              </p>

              <h1 className="text-6xl font-bold mb-6">
                We'd Love To Hear From You
              </h1>

              <p className="max-w-3xl text-lg text-gray-200">
                Have questions about our treatments or ready to schedule a
                consultation? Our team is here to help.
              </p>

            </div>

          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-4">📍</div>

              <h2 className="text-2xl font-bold mb-3">
                Visit Us
              </h2>

              <p className="text-gray-600">
                The Manila Residences Tower II
                <br />
                Taft Avenue, Manila
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-4">📞</div>

              <h2 className="text-2xl font-bold mb-3">
                Call Us
              </h2>

              <p className="text-gray-600">
                +63 912 345 6789
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="text-5xl mb-4">✉️</div>

              <h2 className="text-2xl font-bold mb-3">
                Email Us
              </h2>

              <p className="text-gray-600">
                clinic@email.com
              </p>

            </div>

          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-3xl p-10 shadow-lg mb-20 text-center">

            <h2 className="text-4xl font-bold mb-8">
              Business Hours
            </h2>

            <div className="space-y-3 text-lg text-gray-600">

              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>

              <p>Saturday: 9:00 AM - 5:00 PM</p>

              <p>Sunday: Closed</p>

            </div>

          </div>

          {/* Google Map */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-20">

            <iframe
              src="https://maps.google.com/maps?q=The%20Manila%20Residences%20Tower%20II%20Taft%20Avenue%20Manila&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

          {/* CTA */}
          <div className="text-center">

            <Link
              href="/appointment"
              className="inline-block bg-black text-white px-12 py-5 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:bg-[#d9c9b2] hover:text-black hover:-translate-y-1 transition-all duration-300"
            >
              Book Consultation
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}