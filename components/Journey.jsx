export default function Journey() {

  const timeline = [
    {
      year: "25+ Years Ago",
      title: "Beginning Of The Journey",
      description:
        "Started transportation operations with a strong vision of providing reliable and trustworthy logistics services across India.",
    },

    {
      year: "OM Freight Carrier",
      title: "Trusted Transport Operations",
      description:
        "Successfully operated OM Freight Carrier, serving North India to Chhattisgarh with dependable transportation and logistics support.",
    },

    {
      year: "2023",
      title: "Transition & Growth",
      description:
        "After concluding OM Freight Carrier operations, we moved forward with new expansion opportunities and modern logistics solutions.",
    },

    {
      year: "Present",
      title: "Shri Om Logistic",
      description:
        "Currently operating as Shri Om Logistic with strong transport partnerships, franchise support, and reliable logistics services.",
    },

    {
      year: "Future Vision",
      title: "Expanding Across India",
      description:
        "Focused on building long-term partnerships and expanding transport and cargo operations across multiple regions in India.",
    },
  ];

  return (
    <section
      id="journey"
      className="bg-black text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-yellow-500 uppercase tracking-widest font-semibold mb-4">
            Our Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building Trust Through
            <span className="text-yellow-500">
              {" "}Years Of Experience
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            From trusted transportation roots to modern logistics operations,
            our journey reflects commitment, growth, and long-term reliability.
          </p>

        </div>

        {/* TIMELINE */}
        <div className="relative mt-24">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-yellow-500/30 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">

            {timeline.map((item, index) => (

              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* CARD */}
                <div className="w-full md:w-[45%]">

                  <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8 hover:border-yellow-500 transition duration-300">

                    <span className="text-yellow-500 font-semibold uppercase tracking-widest text-sm">
                      {item.year}
                    </span>

                    <h3 className="text-3xl font-bold mt-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-5 leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                </div>

                {/* DOT */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">

                  <div className="w-6 h-6 bg-yellow-500 rounded-full border-4 border-black shadow-[0_0_25px_#eab308]"></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}