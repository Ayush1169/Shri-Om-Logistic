export default function CTA() {
  return (
    <section className="bg-zinc-950 py-24 text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-zinc-900 to-black p-10 md:p-16">

          {/* GLOW EFFECT */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT CONTENT */}
            <div className="max-w-3xl">

              <p className="text-yellow-500 uppercase tracking-widest font-semibold mb-4">
                Transport & Logistics Solutions
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Looking For Reliable
                <span className="text-yellow-500">
                  {" "}Transportation Support?
                </span>
              </h2>

              <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                Partner with Shri Om Logistic for safe,
                timely, and professional transport services
                across India to Chhattisgarh.
              </p>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5">

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
                Explore Services
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}