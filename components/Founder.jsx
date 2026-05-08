import Image from "next/image";

export default function Founder() {
  return (
    <section className="bg-zinc-950 text-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGES */}
          <div className="relative flex flex-col sm:flex-row gap-6 justify-center items-center">

  {/* IMAGE 1 */}
  <div className="relative w-full sm:w-[280px] h-[420px] rounded-[32px] overflow-hidden border border-gray-800 group">

    <Image
      src="/image/IMG_20260508_104159.jpg.jpeg"
      alt="Founder Image"
      fill
      className="object-cover group-hover:scale-105 transition duration-500"
      priority
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

  </div>

  {/* IMAGE 2 */}
  <div className="relative w-full sm:w-[280px] h-[420px] rounded-[32px] overflow-hidden border border-gray-800 sm:mt-16 group">

    <Image
      src="/image/IMG_20260508_102937.jpg.jpeg"
      alt="Founder Image"
      fill
      className="object-cover group-hover:scale-105 transition duration-500"
      priority
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

  </div>

</div>

          {/* RIGHT CONTENT */}
          <div>

            <p className="text-yellow-500 uppercase tracking-widest font-semibold mb-4">
              Founder & CEO
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Mr. Raja Upadhyay
            </h2>

            <p className="text-yellow-500 text-xl mt-4 font-semibold">
              Founder & CEO – OM Freight Carrier & Shri Om Logistic
            </p>

            <p className="text-gray-400 mt-8 text-lg leading-relaxed">
              Mr. Raja Upadhyay is a highly experienced and respected
              name in the transportation and logistics industry with
              more than 25 years of dedicated service and leadership.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              With his vision, commitment, and deep industry knowledge,
              he successfully built OM Freight Carrier into one of the
              most trusted transportation companies operating from
              North India to all over Chhattisgarh.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              After years of successful operations and strong customer trust,
              he continued his journey by establishing Shri Om Logistic,
              carrying forward the same values of reliability,
              professionalism, and customer satisfaction.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              Under his leadership, Shri Om Logistic continues to grow
              with a vision to expand partnerships and deliver trusted
              logistics solutions across India.
            </p>

            {/* EXPERIENCE CARD */}
            <div className="mt-10 bg-black border border-gray-800 rounded-3xl p-6 inline-block">

              <h3 className="text-4xl font-bold text-yellow-500">
                25+
              </h3>

              <p className="text-gray-400 mt-2">
                Years Of Leadership & Experience
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}