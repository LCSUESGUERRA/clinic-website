"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";

export default function AdminPage() {
    const handleLogout = async () => {
  try {
    await signOut(auth);
    router.push("/admin/login");
  } catch (error) {
    console.error(error);
  }
};
  const [appointments, setAppointments] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

const [loading, setLoading] = useState(true);
  const updateStatus = async (
  id: string,
  status: string
) => {
  try {
    const appointmentRef = doc(
      db,
      "appointments",
      id
    );

    await updateDoc(appointmentRef, {
      status,
    });

    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status }
          : appointment
      )
    );
  } catch (error) {
    console.error(error);
  }
};

 const deleteAppointment = async (
  id: string
) => {
  const confirmed = window.confirm(
    "Delete this appointment?"
  );

  if (!confirmed) return;

  try {
    await deleteDoc(
      doc(db, "appointments", id)
    );

    setAppointments((prev) =>
      prev.filter(
        (appointment) =>
          appointment.id !== id
      )
    );
  } catch (error) {
    console.error(error);
  }
};

const exportToExcel = () => {

  const worksheet = XLSX.utils.json_to_sheet(
    appointments.map((appointment) => ({
      Name: appointment.name,
      Email: appointment.email,
      Phone: appointment.phone,
      Service: appointment.service,
      Date: appointment.date,
      Time: appointment.time,
      Notes: appointment.notes,
      Status: appointment.status,
    }))
  );

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Appointments"
  );

  XLSX.writeFile(
    workbook,
    "appointments.xlsx"
  );
};

useEffect(() => {
  const unsubscribe = onAuthStateChanged(
    auth,
    (user) => {
      if (!user) {
        router.push("/admin/login");
      } else {
        setLoading(false);
      }
    }
  );

  return () => unsubscribe();
}, [router]);

  useEffect(() => {
  const fetchAppointments = async () => {

    const querySnapshot = await getDocs(
      collection(db, "appointments")
    );

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    data.sort((a: any, b: any) => {

      const dateA = new Date(
        `${a.date} ${a.time}`
      ).getTime();

      const dateB = new Date(
        `${b.date} ${b.time}`
      ).getTime();

      return dateB - dateA;
    });

    setAppointments(data);
  };

  fetchAppointments();
}, []);
   const filteredAppointments =
  appointments.filter((appointment) =>
    appointment.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase()) ||

    appointment.email
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase()) ||

    appointment.phone
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
if (loading) {
  return (
    <div className="p-10">
      Checking authentication...
    </div>
  );
}
  return (
    <main className="min-h-screen bg-[#f8f5f0] p-10">

  <div className="absolute top-20 right-20 w-96 h-96 bg-[#e9ddc8] rounded-full blur-3xl opacity-40"></div>

  <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#f0e8db] rounded-full blur-3xl opacity-40"></div>

<div className="relative z-10 flex justify-between items-center mb-10">

  <h1 className="text-5xl font-bold">
    Appointment Dashboard
  </h1>

  <div className="flex gap-4">

    <button
      onClick={exportToExcel}
      className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
    >
      Export Excel
    </button>

    <button
      onClick={handleLogout}
      className="bg-black text-white px-6 py-3 rounded-xl hover:bg-red-600 transition"
    >
      Logout
    </button>

  </div>

</div>

<div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">

  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
    <p className="text-gray-500 text-sm">
      Total Appointments
    </p>

    <h2 className="text-4xl font-bold mt-2">
      {appointments.length}
    </h2>
  </div>

  <div className="bg-yellow-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
    <p className="text-yellow-700 text-sm">
      Pending
    </p>

    <h2 className="text-4xl font-bold text-yellow-700 mt-2">
      {
        appointments.filter(
          (a) => a.status === "Pending"
        ).length
      }
    </h2>
  </div>

  <div className="bg-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
    <p className="text-green-700 text-sm">
      Confirmed
    </p>

    <h2 className="text-4xl font-bold text-green-700 mt-2">
      {
        appointments.filter(
          (a) => a.status === "Confirmed"
        ).length
      }
    </h2>
  </div>

  <div className="bg-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
    <p className="text-blue-700 text-sm">
      Completed
    </p>

    <h2 className="text-4xl font-bold text-blue-700 mt-2">
      {
        appointments.filter(
          (a) => a.status === "Completed"
        ).length
      }
    </h2>
  </div>

  <div className="bg-red-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
    <p className="text-red-700 text-sm">
      Cancelled
    </p>

    <h2 className="text-4xl font-bold text-red-700 mt-2">
      {
        appointments.filter(
          (a) => a.status === "Cancelled"
        ).length
      }
    </h2>
  </div>

</div>

      <div className="mb-6">

  <input
    type="text"
    placeholder="Search by name, email, or phone..."
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
    className="w-full bg-white rounded-2xl px-5 py-4 shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
  />

</div>
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
  <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-black text-white">

            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Notes</th>
              <th className="p-4 text-left">Status</th>
<th className="p-4 text-left">Actions</th>
            </tr>

          </thead>

          <tbody>

  {filteredAppointments.length === 0 ? (

    <tr>
      <td
        colSpan={9}
        className="p-10 text-center text-gray-500 text-lg"
      >
        No appointments found.
      </td>
    </tr>

  ) : (

    filteredAppointments.map((appointment) => (

      <tr
        key={appointment.id}
        className="border-b"
      >
                <td className="p-4">{appointment.name}</td>
                <td className="p-4">{appointment.email}</td>
                <td className="p-4">{appointment.phone}</td>
                <td className="p-4">{appointment.service}</td>
                <td className="p-4">{appointment.date}</td>
                <td className="p-4">{appointment.time}</td>
                <td className="p-4">{appointment.notes}</td>
                <td className="p-4">

 <select
  value={appointment.status}
  onChange={(e) =>
    updateStatus(
      appointment.id,
      e.target.value
    )
  }
  className={`rounded-lg px-3 py-2 font-medium
    ${
      appointment.status === "Pending"
        ? "bg-yellow-100 text-yellow-800"
        : appointment.status === "Confirmed"
        ? "bg-green-100 text-green-800"
        : appointment.status === "Completed"
        ? "bg-blue-100 text-blue-800"
        : "bg-red-100 text-red-800"
    }
  `}
>
    <option value="Pending">
      Pending
    </option>

    <option value="Confirmed">
      Confirmed
    </option>

    <option value="Completed">
      Completed
    </option>

    <option value="Cancelled">
      Cancelled
    </option>

  </select>

</td>

<td className="p-4">

  <button
    onClick={() =>
      deleteAppointment(
        appointment.id
      )
    }
    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
  >
    Delete
  </button>

</td>
              </tr>

            ))
                )
        }

          </tbody>

        </table>
        </div>

      </div>

    </main>
  );
}