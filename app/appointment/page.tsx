"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import Navbar from "../components/Navbar";

export default function AppointmentPage() {
  const router = useRouter();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [service, setService] = useState("Consultation");
const [date, setDate] = useState("");
const [time, setTime] = useState("");
const [notes, setNotes] = useState("");
const [bookedTimes, setBookedTimes] = useState<string[]>([]);

const availableTimes = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];
useEffect(() => {
  const fetchBookedTimes = async () => {
    if (!date) {
      setBookedTimes([]);
      return;
    }

    try {
      const q = query(
        collection(db, "appointments"),
        where("date", "==", date)
      );

      const snapshot = await getDocs(q);

      const booked = snapshot.docs
        .filter((doc) => {
          const data = doc.data();

          return (
            data.status === "Pending" ||
            data.status === "Confirmed"
          );
        })
        .map((doc) => doc.data().time);

      setBookedTimes(booked);
    } catch (error) {
      console.error("Error fetching booked times:", error);
    }
  };

  fetchBookedTimes();
}, [date]);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Email validation
if (!/\S+@\S+\.\S+/.test(email)) {
  alert("Please enter a valid email address.");
  return;
}

// Philippine mobile validation
if (!/^09\d{9}$/.test(phone)) {
  alert("Please enter a valid phone number.");
  return;
}

const confirmed = window.confirm(
  `Confirm Appointment?\n\n` +
  `Name: ${name}\n` +
  `Service: ${service}\n` +
  `Date: ${date}\n` +
  `Time: ${time}`
);

if (!confirmed) return;

  try {
    const existingAppointmentQuery = query(
      collection(db, "appointments"),
      where("date", "==", date),
      where("time", "==", time)
    );

    const existingAppointment =
      await getDocs(existingAppointmentQuery);

    const taken =
      existingAppointment.docs.some((doc) => {
        const data = doc.data();

        return (
          data.status === "Pending" ||
          data.status === "Confirmed"
        );
      });

    if (taken) {
      alert(
        "This date and time is already booked."
      );
      return;
    }

    await addDoc(collection(db, "appointments"), {
      name,
      email,
      phone,
      service,
      date,
      time,
      notes,
      createdAt: new Date(),
      status: "Pending",
    });
    
    try {
  const result = await emailjs.send(
    "service_sf0x5wd",
    "template_wzz5zzd",
    {
      name,
      email,
      service,
      date,
      time,
    },
    "K6mGCr-OMlqeuM_T7"
  );

  console.log("Email success:", result);
} catch (err) {
  console.error("EmailJS error:", err);
}

console.log("Sending email...");

const result = await emailjs.send(
  "service_sf0x5wd",
  "template_wzz5zzd",
  {
    name,
    email,
    service,
    date,
    time,
  },
  "K6mGCr-OMlqeuM_T7"
);

console.log("Email sent:", result);

    router.push("/appointment/success");

  } catch (error) {
  console.error(error);

  alert(
    "Error: " +
    (error instanceof Error
      ? error.message
      : JSON.stringify(error))
  );
}
};
  return (
    <main>
      <Navbar />

      <section className="min-h-screen bg-[#f8f5f0] pt-40 pb-20">
        <div className="max-w-3xl mx-auto px-8">

          <div className="text-center mb-12">
            <p className="uppercase tracking-[6px] text-sm text-gray-500 mb-4">
              Book Your Consultation
            </p>

            <h1 className="text-5xl font-bold mb-4">
              Schedule An Appointment
            </h1>

            <p className="text-gray-600">
              Complete the form below and our team will contact you to confirm your appointment.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <form
  className="space-y-6"
  onSubmit={handleSubmit}
>

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

               <input
  type="text"
  required
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter your full name"
  className="w-full border border-gray-300 rounded-xl px-4 py-3"
/>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
  type="email"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
  className="w-full border border-gray-300 rounded-xl px-4 py-3"
/>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
  type="text"
  required
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  placeholder="Enter your phone number"
  className="w-full border border-gray-300 rounded-xl px-4 py-3"
/>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Select Service
                </label>

               <select
  required
  value={service}
  onChange={(e) => setService(e.target.value)}
  className="w-full border border-gray-300 rounded-xl px-4 py-3"
>
                  
                  <option>Consultation</option>
                  <option>Botox</option>
                  <option>Dermal Fillers</option>
                  <option>Laser Treatment</option>
                  <option>Skin Rejuvenation</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Preferred Date
                </label>

                <input
  type="date"
  required
  value={date}
  onChange={(e) => {
  setDate(e.target.value);
  setTime("");
}}
  min={new Date().toISOString().split("T")[0]}
  className="w-full border border-gray-300 rounded-xl px-4 py-3"
/>
              </div>

              <div>
  <label className="block mb-2 font-medium">
    Preferred Time
  </label>

  <select
    required
    value={time}
    onChange={(e) => setTime(e.target.value)}
    className="w-full border border-gray-300 rounded-xl px-4 py-3"
  >
    <option value="">Select Time</option>

    {availableTimes.map((slot) => (
      <option
        key={slot}
        value={slot}
        disabled={bookedTimes.includes(slot)}
      >
        {bookedTimes.includes(slot)
          ? `${slot} (Booked)`
          : slot}
      </option>
    ))}
  </select>

  <p className="text-sm text-gray-500 mt-2">
    Available Monday - Saturday, 9:00 AM - 6:00 PM
  </p>
</div>

              <div>
                <label className="block mb-2 font-medium">
                  Additional Notes
                </label>

                <textarea
  rows={4}
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
  placeholder="Tell us about your concerns..."
  className="w-full border border-gray-300 rounded-xl px-4 py-3"
/>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-[#d9c9b2] hover:text-black transition-all duration-300"
              >
                Submit Appointment Request
              </button>

              <div className="mt-10 text-center text-gray-600">
  <p className="font-semibold">
    Need immediate assistance?
  </p>

  <p>
    📞 +63 912 345 6789
  </p>

  <p>
    ✉ clinic@email.com
  </p>
</div>

            </form>

          </div>

        </div>
      </section>
    </main>
  );
}