import Image from "next/image";

export default function Founder() {
  return (
    <section className="bg-zinc-950 text-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="text-yellow-500 uppercase tracking-widest font-semibold mb-4">
            Our Leadership
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Leadership Behind
            <span className="text-yellow-500">
              {" "}Shri Om Logistic
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Experienced leadership driving trusted transportation
            and logistics operations across India with professionalism,
            commitment, and operational excellence.
          </p>

        </div>

        {/* ================================= */}
        {/* RAJA UPADHYAY */}
        {/* ================================= */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-28">

          {/* LEFT IMAGES */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            {/* FAMILY IMAGE */}
            <div className="relative w-full sm:w-[280px] h-[420px] rounded-[32px] overflow-hidden border border-gray-800 group">

              <Image
                src="/image/IMG_20260508_104159.jpg.jpeg"
                alt="Leadership"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-500"
                priority
              />

              <div className="absolute inset-0 bg-black/20"></div>

            </div>

            {/* RAJA SIR */}
            <div className="relative w-full sm:w-[280px] h-[420px] rounded-[32px] overflow-hidden border border-gray-800 group sm:mt-16">

              <Image
                src="/image/IMG_20260508_103633.jpg.jpeg"
                alt="Mr Raja Upadhyay"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-500"
                priority
              />

              <div className="absolute inset-0 bg-black/20"></div>

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
              Known for his strong business relationships,
              operational expertise, and commitment towards timely
              and safe transportation services.
            </p>

          </div>

        </div>

        {/* ================================= */}
        {/* VIVEK UPADHYAY */}
        {/* ================================= */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">

            <p className="text-yellow-500 uppercase tracking-widest font-semibold mb-4">
              Proprietor & Operations Head
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Mr. Vivek Upadhyay
            </h2>

            <p className="text-yellow-500 text-xl mt-4 font-semibold">
              Proprietor & Operations Head – Shri Om Logistic
            </p>

            <p className="text-gray-400 mt-8 text-lg leading-relaxed">
              Mr. Vivek Upadhyay represents the new generation
              leadership of Shri Om Logistic with dedication,
              professionalism, and a modern business approach.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              Since joining the transportation and logistics industry
              in 2023, he has been actively managing and handling
              operations in the Korba region efficiently.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              As the Proprietor of Shri Om Logistic, he focuses on
              operational management, customer coordination,
              transport planning, and business development while
              ensuring smooth logistics services.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              With a combination of fresh vision and experienced
              guidance, he aims to continue the company’s reputation
              for trust, reliability, and professional service.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative w-full sm:w-[320px] h-[450px] rounded-[32px] overflow-hidden border border-gray-800 group">

              <Image
                src="/image/IMG_20260508_102937.jpg.jpeg"
                alt="Mr Vivek Upadhyay"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top sm:object-center group-hover:scale-105 transition duration-500"
                priority
              />

              <div className="absolute inset-0 bg-black/20"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}