import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function SuccessPage() {
  return (
    <main>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-[#f8f5f0] px-8">

        <div className="bg-white rounded-3xl shadow-xl p-12 max-w-2xl text-center">

          <div className="text-6xl mb-6">
            ✓
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Appointment Request Submitted
          </h1>

          <p className="text-gray-600 mb-10">
            Thank you for choosing our clinic.
            Our team will contact you shortly to confirm
            your appointment details.
          </p>

          <Link
            href="/"
            className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-[#d9c9b2] hover:text-black transition-all duration-300"
          >
            Return Home
          </Link>

        </div>

      </section>
    </main>
  );
}