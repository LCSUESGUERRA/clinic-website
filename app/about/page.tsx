import Navbar from "../components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="relative bg-[#f8f5f0] pt-40 pb-20 overflow-hidden">

        {/* Belo-style background */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#e9ddc8] rounded-full blur-3xl opacity-40"></div>

        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#f0e8db] rounded-full blur-3xl opacity-40"></div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-[#d9c9b2] rounded-full opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">

          {/* Hero */}

          <div className="text-center mb-24">

            <p className="uppercase tracking-[6px] text-sm text-gray-500 mb-4">
              About Our Clinic
            </p>

            <h1 className="text-6xl font-bold mb-6">
              Enhancing Confidence Through Expert Care
            </h1>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We combine advanced aesthetic technology with personalized
              treatments to help every client look and feel their best.
            </p>

          </div>

          {/* Statistics */}

          <div className="grid md:grid-cols-4 gap-8 mb-28">

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h2 className="text-5xl font-bold mb-2">500+</h2>
              <p className="text-gray-600">Satisfied Patients</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h2 className="text-5xl font-bold mb-2">15+</h2>
              <p className="text-gray-600">Treatments Offered</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h2 className="text-5xl font-bold mb-2">5+</h2>
              <p className="text-gray-600">Years Experience</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h2 className="text-5xl font-bold mb-2">98%</h2>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>

          </div>

          {/* Mission & Vision */}

          <div className="grid md:grid-cols-2 gap-10 mb-28">

            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h2 className="text-4xl font-bold mb-6">
                Our Mission
              </h2>

              <p className="text-gray-600">
                To provide safe, effective, and personalized aesthetic
                treatments that enhance confidence and overall well-being.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h2 className="text-4xl font-bold mb-6">
                Our Vision
              </h2>

              <p className="text-gray-600">
                To become a trusted leader in aesthetic care by delivering
                exceptional results and client experiences.
              </p>
            </div>

          </div>

          {/* Why Choose Us */}

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-sm text-gray-500 mb-4">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold">
              The Difference You Deserve
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-28">

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">
                Advanced Technology
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">👩‍⚕️</div>
              <h3 className="text-xl font-semibold mb-3">
                Expert Specialists
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-3">
                Personalized Care
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">
                Safe Procedures
              </h3>
            </div>

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