"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";
import { useState } from "react";


export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryImages = [
    {
      image: "/images/gallery1.jpg",
      title: "Treatment Room",
      subtitle: "Premium patient experience",
      category: "Clinic",
      large: true,
    },
    {
      image: "/images/gallery1.jpg",
      title: "Advanced Equipment",
      subtitle: "Modern technology",
      category: "Treatments",
      large: false,
    },
    {
      image: "/images/gallery1.jpg",
      title: "Consultation Area",
      subtitle: "Personalized care",
      category: "Clinic",
      large: false,
    },
    {
      image: "/images/gallery1.jpg",
      title: "Client Results",
      subtitle: "Real transformations",
      category: "Results",
      large: true,
    },
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-gradient-to-b from-[#f8f5f0] via-[#fdfbf8] to-white overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#e9ddc8] rounded-full blur-3xl opacity-30"></div>

<div className="absolute bottom-10 right-10 w-96 h-96 bg-[#f0e8db] rounded-full blur-3xl opacity-30"></div>

        <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-[#d9c9b2] rounded-full opacity-20"></div>

        <div className="max-w-7xl mx-auto px-8 text-center">

          <p className="uppercase tracking-[6px] text-sm text-gray-500 mb-4">
            Gallery
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Explore Our Clinic
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Discover our clinic facilities, treatment rooms,
            advanced equipment, and aesthetic results.
          </p>

        </div>

      </section>

      {/* Filter Buttons */}
      <section className="bg-[#f8f5f0] pb-12">

        <div className="flex justify-center gap-4 flex-wrap">

          {["All", "Clinic", "Treatments", "Results"].map(
            (category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`px-6 py-3 rounded-full transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-black text-white shadow-lg"
                      : "bg-white shadow-lg hover:shadow-xl"
                  }
                `}
              >
                {category}
              </button>
            )
          )}

        </div>

      </section>

      {/* Gallery */}
      <section className="pb-24 bg-[#f8f5f0]">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {filteredImages.map((item, index) => (

              <div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-lg group"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover group-hover:scale-110 transition duration-500
                    ${
                      item.large
                        ? "h-[500px]"
                        : "h-[350px]"
                    }
                  `}
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

                <div className="absolute bottom-6 left-6 text-white">

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-sm">
                    {item.subtitle}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div className="bg-[#f8f5f0] rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-xl transition">

  <h2 className="text-5xl font-bold mb-2">
    5K+
  </h2>

  <p className="text-gray-600">
    Satisfied Clients
  </p>

</div>

            <div className="bg-[#f8f5f0] rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-xl transition">

  <h2 className="text-5xl font-bold mb-2">
    10+
  </h2>

  <p className="text-gray-600">
    Years of Experience
  </p>

</div>

            <div className="bg-[#f8f5f0] rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-xl transition">

  <h2 className="text-5xl font-bold mb-2">
    15+
  </h2>

  <p className="text-gray-600">
    Treatments offered
  </p>

</div>

            <div className="bg-[#f8f5f0] rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-xl transition">

  <h2 className="text-5xl font-bold mb-2">
    99%
  </h2>

  <p className="text-gray-600">
    Client Satisfaction
  </p>

</div>

          </div>

        </div>

      </section>

      <div className="flex items-center justify-center mb-16">

  <div className="w-24 h-[1px] bg-gray-300"></div>

  <span className="mx-6 uppercase tracking-[6px] text-sm text-gray-500">
    Results
  </span>

  <div className="w-24 h-[1px] bg-gray-300"></div>

</div>

      {/* Before & After */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center mb-16">
            Before & After Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              "Skin Rejuvenation",
              "Laser Treatment",
              "Acne Scar Treatment",
            ].map((title) => (

              <div
                key={title}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-3 hover:shadow-2xl transition duration-300"
              >

                <img
                  src="/images/gallery1.jpg"
                  alt={title}
                  className="w-full h-[320px] object-cover"
                />

                <div className="p-6 text-center">

                  <h3 className="text-2xl font-semibold mb-3">
                    {title}
                  </h3>

                  <p className="text-gray-600">
                    Visible improvements after treatment.
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
<section
  className="relative py-32 overflow-hidden"
  style={{
    backgroundImage: "url('/images/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center px-8 text-white">

    <p className="uppercase tracking-[6px] text-sm mb-4">
      Ready To Transform?
    </p>

    <h2 className="text-5xl md:text-6xl font-bold mb-8">
      Book Your Consultation Today
    </h2>

    <p className="text-gray-200 mb-10 text-lg">
      Let our specialists create a personalized
      treatment plan for you.
    </p>

    <Link
      href="/appointment"
      className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-[#d9c9b2] transition"
    >
      Book Appointment
    </Link>

  </div>

</section>

    </main>
  );
}