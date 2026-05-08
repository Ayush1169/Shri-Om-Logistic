import Image from "next/image";
export default function Hero() {

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-yellow-500 font-semibold mb-4 tracking-widest uppercase">
              Trusted Transport Services
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Reliable Logistics &
              <span className="text-yellow-500"> Transportation</span>
              <br />
              Across India
            </h1>

            <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-2xl">
              With 25+ years of experience, Shri Om Logistic delivers
              safe, fast, and dependable transportation solutions from
              North India to Chhattisgarh with professionalism and trust.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <a
                href="#contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition duration-300 text-center"
              >
                Contact Us
              </a>

              <a
                href="#services"
                className="border border-gray-700 hover:border-yellow-500 hover:text-yellow-500 px-8 py-4 rounded-full font-semibold transition duration-300 text-center"
              >
                Our Services
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-14">

              <div className="border border-gray-800 bg-zinc-900 p-6 rounded-2xl">
                <h2 className="text-3xl font-bold text-yellow-500">
                  25+
                </h2>
                <p className="text-gray-400 mt-2">
                  Years Experience
                </p>
              </div>

              <div className="border border-gray-800 bg-zinc-900 p-6 rounded-2xl">
                <h2 className="text-3xl font-bold text-yellow-500">
                  100%
                </h2>
                <p className="text-gray-400 mt-2">
                  Trusted Service
                </p>
              </div>

              <div className="border border-gray-800 bg-zinc-900 p-6 rounded-2xl col-span-2 md:col-span-1">
                <h2 className="text-3xl font-bold text-yellow-500">
                  PAN
                </h2>
                <p className="text-gray-400 mt-2">
                  Chhatisgarh Network
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE PLACEHOLDER */}
          <div className="relative">

           <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden border border-gray-800">

  <Image
  src="/image/file_0000000062b4720c8add824db597efed.png"
  alt="Truck"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover object-center"
  priority
/>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/20"></div>

</div>

          </div>

        </div>
      </div>
    </section>
  );
}