import Navbar from "../components/Navbar";
import Link from "next/link";


export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section className="relative bg-[#f8f5f0] pt-40 pb-20 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#e9ddc8] rounded-full blur-3xl opacity-40"></div>

<div className="absolute bottom-20 left-20 w-80 h-80 bg-[#f0e8db] rounded-full blur-3xl opacity-40"></div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] border border-[#d9c9b2] rounded-full opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-sm text-gray-500 mb-4">
              Our Treatments
            </p>

            <h1 className="text-6xl font-bold mb-6">
              Premium Aesthetic Services
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover advanced aesthetic treatments designed to enhance
              your natural beauty and confidence.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Botox */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <img
  src="/images/gallery1.jpg"
  alt="Botox"
  className="w-full h-[300px] object-cover"
/>

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  Botox
                </h2>

                <p className="text-gray-600 mb-4">
                  Smooth fine lines and wrinkles with safe and effective
                  botulinum toxin treatments.
                </p>

                <ul className="space-y-2 text-gray-600">
                  <li>✓ Forehead Lines</li>
                  <li>✓ Crow's Feet</li>
                  <li>✓ Frown Lines</li>
                </ul>
              </div>
            </div>

            {/* Fillers */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <img
  src="/images/gallery1.jpg"
  alt="Botox"
  className="w-full h-[300px] object-cover"
/>

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  Dermal Fillers
                </h2>

                <p className="text-gray-600 mb-4">
                  Restore volume and enhance facial contours for a youthful appearance.
                </p>

                <ul className="space-y-2 text-gray-600">
                  <li>✓ Lip Enhancement</li>
                  <li>✓ Cheek Contouring</li>
                  <li>✓ Jawline Definition</li>
                </ul>
              </div>
            </div>

            {/* Laser */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <img
  src="/images/gallery1.jpg"
  alt="Botox"
  className="w-full h-[300px] object-cover"
/>

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  Laser Treatments
                </h2>

                <p className="text-gray-600 mb-4">
                  Advanced laser technology for skin rejuvenation and correction.
                </p>

                <ul className="space-y-2 text-gray-600">
                  <li>✓ Acne Scar Reduction</li>
                  <li>✓ Pigmentation Treatment</li>
                  <li>✓ Skin Tightening</li>
                </ul>
              </div>
            </div>

            {/* Rejuvenation */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <img
  src="/images/gallery1.jpg"
  alt="Botox"
  className="w-full h-[300px] object-cover"
/>

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  Skin Rejuvenation
                </h2>

                <p className="text-gray-600 mb-4">
                  Improve skin texture, hydration, and overall radiance.
                </p>

                <ul className="space-y-2 text-gray-600">
                  <li>✓ Glow Boosting</li>
                  <li>✓ Hydration Therapy</li>
                  <li>✓ Anti-Aging Care</li>
                </ul>
              </div>
            </div>

          </div>

          <section className="mt-32 mb-20">

  <div className="text-center mb-16">

    <p className="uppercase tracking-[6px] text-sm text-gray-500 mb-4">
      Why Choose Us
    </p>

    <h2 className="text-5xl font-bold">
      The Difference You Deserve
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
      <div className="text-5xl mb-4">✨</div>
      <h3 className="text-2xl font-semibold mb-3">
        Advanced Technology
      </h3>
      <p className="text-gray-600">
        State-of-the-art equipment and modern treatment techniques.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
      <div className="text-5xl mb-4">👩‍⚕️</div>
      <h3 className="text-2xl font-semibold mb-3">
        Expert Specialists
      </h3>
      <p className="text-gray-600">
        Highly trained professionals dedicated to exceptional care.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
      <div className="text-5xl mb-4">💎</div>
      <h3 className="text-2xl font-semibold mb-3">
        Personalized Plans
      </h3>
      <p className="text-gray-600">
        Treatments customized to your goals and unique needs.
      </p>
    </div>

  </div>

</section>

          <div className="text-center mt-20">

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