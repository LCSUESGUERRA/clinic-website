"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const doctors = [
    {
      name: "Dr. Sophia Reyes",
      specialty: "Aesthetic Dermatologist",
      experience: "15 Years Experience",
      image: "/images/doctors/doctor1.jpg",
      bio: "Specialist in facial rejuvenation, anti-aging treatments, and advanced dermatology procedures.",
      certifications: [
        "Board Certified Dermatologist",
        "International Aesthetic Medicine Association",
        "Laser Treatment Specialist",
      ],
    },
    {
      name: "Dr. Michael Santos",
      specialty: "Cosmetic Surgeon",
      experience: "12 Years Experience",
      image: "/images/doctors/doctor2.jpg",
      bio: "Expert in minimally invasive cosmetic procedures and facial contouring.",
      certifications: [
        "Board Certified Cosmetic Surgeon",
        "Advanced Facial Surgery Training",
        "Aesthetic Excellence Award",
      ],
    },
    {
      name: "Dr. Angela Cruz",
      specialty: "Skin Specialist",
      experience: "10 Years Experience",
      image: "/images/doctors/doctor3.jpg",
      bio: "Focused on acne treatment, skin rejuvenation, and personalized skincare.",
      certifications: [
        "Board Certified Dermatologist",
        "Skin Rejuvenation Specialist",
        "Acne Treatment Expert",
      ],
    },
  ];

  return (
    <main className="relative z-10">

      <Navbar />

      {/* Hero Banner */}
<section className="relative h-[500px] flex items-center justify-center overflow-hidden">

  <div className="absolute inset-0">
    <img
      src="/images/doctors-banner.jpg"
      alt="Doctors"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 text-center text-white px-6">

    <p className="uppercase tracking-[8px] text-sm mb-4">
      Professional Team
    </p>

    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      Meet Our Specialists
    </h1>

    <p className="max-w-2xl mx-auto text-lg text-white/90">
      Experienced professionals dedicated to helping
      you achieve your aesthetic goals safely and confidently.
    </p>

  </div>

</section>

      {/* Hero */}
      <section className="pt-40 pb-20 text-center">
        <p className="uppercase tracking-[8px] text-gray-500 mb-4">
          Our Experts
        </p>

        <h1 className="text-6xl font-bold mb-6">
          Meet Our Specialists
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Our highly trained professionals combine
          expertise, innovation, and personalized care.
        </p>
      </section>

      {/* Doctors */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-3 gap-10">

          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-[450px]">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">

                <h2 className="text-2xl font-bold mb-2">
                  {doctor.name}
                </h2>

                <p className="text-[#c8a96b] font-medium mb-2">
                  {doctor.specialty}
                </p>

                <p className="text-gray-500 mb-6">
                  {doctor.experience}
                </p>

                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  className="bg-black text-white px-6 py-3 rounded-full hover:bg-[#c8a96b] hover:text-black transition"
                >
                  View Profile
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
            <h2 className="text-5xl font-bold mb-3">
              15+
            </h2>
            <p className="text-gray-500">
              Years Experience
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
            <h2 className="text-5xl font-bold mb-3">
              5000+
            </h2>
            <p className="text-gray-500">
              Happy Patients
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
            <h2 className="text-5xl font-bold mb-3">
              98%
            </h2>
            <p className="text-gray-500">
              Satisfaction Rate
            </p>
          </div>

        </div>
      </section>

      {/* Modal */}
      {selectedDoctor && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6">

          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 relative">

            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 text-2xl"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-2">
              {selectedDoctor.name}
            </h2>

            <p className="text-[#c8a96b] font-medium mb-6">
              {selectedDoctor.specialty}
            </p>

            <p className="text-gray-600 mb-6">
              {selectedDoctor.bio}
            </p>

            <h3 className="font-bold text-xl mb-3">
              Certifications
            </h3>

            <ul className="space-y-2 mb-6">

              {selectedDoctor.certifications.map(
                (cert: string) => (
                  <li key={cert}>
                    ✓ {cert}
                  </li>
                )
              )}

            </ul>

            <div className="bg-[#f8f5f0] rounded-2xl p-5">

              <h3 className="font-bold mb-2">
                Schedule
              </h3>

              <p>Monday - Friday</p>
              <p>9:00 AM - 5:00 PM</p>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}