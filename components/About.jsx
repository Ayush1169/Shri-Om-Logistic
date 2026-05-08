import Image from "next/image";
export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT IMAGE PLACEHOLDER */}
          <div className="relative">

            <div className="relative h-[550px] w-full rounded-3xl overflow-hidden border border-gray-800">

  <Image
    src="/image/file_00000000b2b8722f935873bad7b62c91.png"
    alt="About Transport"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover object-center"
    priority
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/30"></div>

</div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            <p className="text-yellow-500 uppercase tracking-widest font-semibold mb-4">
              About Us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              25+ Years Of Trusted
              <span className="text-yellow-500">
                {" "}Transportation Excellence
              </span>
            </h2>

            <p className="text-gray-400 mt-8 text-lg leading-relaxed">
              With over 25 years of experience in the transportation
              industry, Shri Om Logistic has built a strong reputation
              for reliable, safe, and timely logistics services across India.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              We specialize in transportation services from Delhi,
              Punjab, Haryana, and Uttar Pradesh to all major locations
              across Chhattisgarh including Raigarh, Korba, Raipur,
              Bilaspur, Durg, and Bhilai.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              We are proudly associated with Deepak Roadlines,
              one of India’s most trusted logistics networks,
              providing dependable transportation support
              across Chhattisgarh with professionalism and efficiency.
            </p>

            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="bg-black border border-gray-800 rounded-2xl p-6">
                <h3 className="text-yellow-500 text-2xl font-bold">
                  25+
                </h3>

                <p className="text-gray-400 mt-2">
                  Years Of Industry Experience
                </p>
              </div>

              <div className="bg-black border border-gray-800 rounded-2xl p-6">
                <h3 className="text-yellow-500 text-2xl font-bold">
                  PAN Chhatisgarh
                </h3>

                <p className="text-gray-400 mt-2">
                  Transport Network Support
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}