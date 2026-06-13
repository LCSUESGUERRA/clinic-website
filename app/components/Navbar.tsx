import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div className="font-bold text-xl tracking-wide">
          AESTHETIC CLINIC
        </div>

        <div className="flex gap-8 text-sm uppercase tracking-wider">
          <Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/services">Services</Link>
<Link href="/">Doctors</Link>
<Link href="/">Gallery</Link>
<Link href="/contact">Contact</Link>
        </div>

        <Link
  href="/appointment"
  className="bg-black text-white px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-[#d9c9b2] hover:text-black transition-all duration-300"
>
  Book Appointment
</Link>

      </div>
    </nav>
  );
}