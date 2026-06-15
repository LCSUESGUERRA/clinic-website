import Image from "next/image";
import Navbar from "./components/Navbar";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="relative py-40 overflow-hidden bg-transparent">

  {/* Your Existing Background Effects */}
  <div className="absolute top-20 right-20 w-96 h-96 bg-[#e9ddc8] rounded-full blur-3xl opacity-50"></div>
  <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#f0e8db] rounded-full blur-3xl opacity-50"></div>
  <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] border border-[#d9c9b2] rounded-full opacity-30"></div>
  <div className="absolute top-20 right-20 w-[400px] h-[400px] border border-[#d9c9b2] rounded-full opacity-20"></div>

  {/* Hero Text */}
  <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">

    <p className="uppercase tracking-[8px] text-sm text-gray-500 mb-4">
      PREMIUM AESTHETIC CLINIC
    </p>

    <h1 className="text-4xl md:text-8xl font-bold mb-6 leading-tight">
      Reveal Your Most Confident Self
    </h1>

    <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <Link
  href="/appointment"
  className="inline-block bg-black text-white px-10 py-5 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:bg-[#d9c9b2] hover:text-black transition-all duration-300 mb-8"
>
  Book Now
</Link>

    <div className="flex justify-center gap-8 mb-16 text-sm text-gray-500 flex-wrap">
      <span>✓ Licensed Specialists</span>
      <span>✓ FDA Approved Treatments</span>
      <span>✓ Personalized Care</span>
    </div>

  </div>

  {/* Hero Image */}
  <div className="relative w-full h-[500px] md:h-[800px] overflow-hidden -mt-10">

  <Image
    src="/images/hero.jpg"
    alt="Aesthetic Clinic"
    fill
    priority
    className="object-cover object-center"
  />

  {/* Top fade */}
<div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#f8f5f0]/80 to-transparent z-10" />

{/* Left fade */}
<div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#f8f5f0]/80 to-transparent z-10" />

{/* Right fade */}
<div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#f8f5f0]/80 to-transparent z-10" />

{/* Bottom fade */}
<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f8f5f0] via-[#f8f5f0]/50 to-transparent z-10" />

  </div>

</section>

      <section className="py-24 bg-white -mt-24">
        <div className="absolute -left-32 top-20 w-96 h-96 bg-[#f8f5f0] rounded-full blur-3xl opacity-50"></div>

<div className="absolute -right-32 bottom-0 w-96 h-96 bg-[#efe6d7] rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Services
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-100 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Botox</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-100 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Dermal Fillers</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-100 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Laser Treatments</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-100 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Skin Rejuvenation</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

          </div>

        </div>
      </section>
      <section className="relative py-24 bg-[#f8f5f0] overflow-hidden">
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] border border-[#d9c9b2] rounded-full opacity-10"></div>

<div className="absolute bottom-0 right-0 w-80 h-80 bg-[#e9ddc8] rounded-full blur-3xl opacity-20"></div>
  <div className="max-w-4xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-center mb-16">
      Why Choose Us
    </h2>

   <div className="grid md:grid-cols-2 gap-8 pb-12">

  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition">
    <div className="w-12 h-12 rounded-full bg-amber-100 mb-6"></div>

    <h3 className="text-2xl font-semibold mb-3">
      Board-Certified Specialists
    </h3>

    <p className="text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition">
    <div className="w-12 h-12 rounded-full bg-amber-100 mb-6"></div>

    <h3 className="text-2xl font-semibold mb-3">
      Advanced Technology
    </h3>

    <p className="text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition">
    <div className="w-12 h-12 rounded-full bg-amber-100 mb-6"></div>

    <h3 className="text-2xl font-semibold mb-3">
      Personalized Treatments
    </h3>

    <p className="text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition">
    <div className="w-12 h-12 rounded-full bg-amber-100 mb-6"></div>

    <h3 className="text-2xl font-semibold mb-3">
      Safe & Comfortable Care
    </h3>

    <p className="text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

</div>
  </div>
  <section className="relative pt-32 pb-24 bg-white overflow-hidden">
    <div className="absolute left-0 top-0 w-80 h-80 bg-[#f8f5f0] rounded-full blur-3xl opacity-50"></div>

<div className="absolute right-0 bottom-0 w-96 h-96 bg-[#efe6d7] rounded-full blur-3xl opacity-50"></div>
  <div className="max-w-7xl mx-auto px-8">

    <h2 className="text-5xl font-bold text-center mb-20">
      Meet Our Specialists
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      <div className="text-center hover:-translate-y-2 transition duration-300">
        <img
          src="/images/doctor1.jpg"
          alt="Doctor"
          className="w-full h-[400px] object-cover rounded-3xl mb-6 shadow-lg"
        />

        <h3 className="text-2xl font-semibold">
          Dr. Jane Smith
        </h3>

        <p className="text-gray-500">
          Aesthetic Specialist
        </p>
      </div>

      <div className="text-center hover:-translate-y-2 transition duration-300">
        <img
          src="/images/doctor1.jpg"
          alt="Doctor"
          className="w-full h-[400px] object-cover rounded-3xl mb-6 shadow-lg"
        />

        <h3 className="text-2xl font-semibold">
          Dr. Michael Lee
        </h3>

        <p className="text-gray-500">
          Cosmetic Dermatologist
        </p>
      </div>

      <div className="text-center hover:-translate-y-2 transition duration-300">
        <img
          src="/images/doctor1.jpg"
          alt="Doctor"
          className="w-full h-[400px] object-cover rounded-3xl mb-6 shadow-lg"
        />

        <h3 className="text-2xl font-semibold">
          Dr. Sarah Johnson
        </h3>

        <p className="text-gray-500">
          Laser Treatment Expert
        </p>
      </div>

    </div>

  </div>
</section>
</section>
<section className="relative py-40 bg-[#f8f5f0] overflow-hidden">
  <div className="absolute top-20 left-20 w-96 h-96 bg-[#efe6d7] rounded-full blur-3xl opacity-20"></div>

<div className="absolute bottom-20 right-20 w-80 h-80 bg-[#e9ddc8] rounded-full blur-3xl opacity-20"></div>
  <div className="max-w-6xl mx-auto px-8">

    <h2 className="text-5xl font-bold text-center mb-20">
      Patient Testimonials
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

      <div className="bg-white p-8 rounded-3xl shadow-sm">
        <p className="text-gray-600 mb-6">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore."
        </p>

        <h4 className="font-semibold">
          Maria Santos
        </h4>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm">
        <p className="text-gray-600 mb-6">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore."
        </p>

        <h4 className="font-semibold">
          Angela Cruz
        </h4>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm">
        <p className="text-gray-600 mb-6">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore."
        </p>

        <h4 className="font-semibold">
          Patricia Reyes
        </h4>
      </div>

    </div>

  </div>
</section>
<section className="relative py-20 md:py-32 bg-[#f8f5f0] overflow-hidden">
  <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-[#d9c9b2] rounded-full opacity-30"></div>
  <div className="max-w-7xl mx-auto px-8">

    <section className="py-20 md:py-32 bg-black text-white rounded-3xl">

  <div className="max-w-5xl mx-auto text-center px-8">

    <p className="uppercase tracking-[6px] text-sm mb-6 text-gray-300">
      PREMIUM AESTHETIC EXPERIENCE
    </p>

    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
      Ready To Begin Your Transformation?
    </h2>

    <p className="text-lg text-gray-300 mb-10">
      Schedule a consultation with our specialists and discover
      treatments tailored specifically for you.
    </p>

    <Link
  href="/appointment"
  className="bg-white text-black px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-[#d9c9b2] hover:text-black transition-all duration-300"
>
  Book Appointment
</Link>

  </div>
</section>

</div>

    <h2 className="text-4xl md:text-5xl font-bold text-center mt-20 mb-16">
  Before & After Results
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-0">

  {/* Card 1 */}
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition duration-300">

    <img
      src="/images/gallery1.jpg"
      alt="Skin Rejuvenation"
      className="w-full h-[180px] sm:h-[220px] md:h-[300px] object-cover"
    />

    <div className="p-4 md:p-6 text-center">

      <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
        Skin Rejuvenation
      </h3>

      <p className="text-gray-600">
        Visible improvements after treatment.
      </p>

    </div>

  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition duration-300">

    <img
      src="/images/gallery1.jpg"
      alt="Laser Treatment"
      className="w-full h-[180px] sm:h-[220px] md:h-[300px] object-cover"
    />

    <div className="p-4 md:p-6 text-center">
      <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
        Laser Treatment
      </h3>

      <p className="text-gray-600">
        Visible improvements after treatment.
      </p>

    </div>

  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition duration-300">

    <img
      src="/images/gallery1.jpg"
      alt="Acne Scar Treatment"
      className="w-full h-[180px] sm:h-[220px] md:h-[300px] object-cover"
    />

    <div className="p-4 md:p-6 text-center">

      <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
        Acne Scar Treatment
      </h3>

      <p className="text-gray-600">
        Visible improvements after treatment.
      </p>

    </div>

  </div>

</div>
</section>
    </main>
  );
}