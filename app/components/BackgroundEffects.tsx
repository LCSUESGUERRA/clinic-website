export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

      <div
        className="
          absolute
          top-[-300px]
          right-[-300px]
          w-[1000px]
          h-[1000px]
          bg-[#e9ddc8]
          rounded-full
          blur-[180px]
          opacity-40
          animate-drift-one
        "
      />

      <div
        className="
          absolute
          bottom-[-300px]
          left-[-300px]
          w-[1000px]
          h-[1000px]
          bg-[#d9c9b2]
          rounded-full
          blur-[180px]
          opacity-40
          animate-drift-two
        "
      />

      <div
        className="
          absolute
          top-[30%]
          left-[30%]
          w-[700px]
          h-[700px]
          bg-[#c8a96b]
          rounded-full
          blur-[160px]
          opacity-30
          animate-drift-three
        "
      />

    </div>
  );
}