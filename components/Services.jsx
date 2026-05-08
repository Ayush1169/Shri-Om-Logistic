import {
  Truck,
  PackageCheck,
  Warehouse,
  Building2,
  Globe,
} from "lucide-react";

export default function Services() {

  const services = [
    {
      icon: <Truck size={40} />,
      title: "Transportation Services",
      description:
        "Safe and reliable transportation solutions from North India to Chhattisgarh with timely delivery support.",
    },

    {
      icon: <PackageCheck size={40} />,
      title: "Lorry Booking Services",
      description:
        "Fast and efficient lorry booking services for commercial goods and full-load transportation requirements.",
    },

    {
      icon: <Warehouse size={40} />,
      title: "Cargo & Logistics Support",
      description:
        "Professional cargo handling and logistics management tailored to business transportation needs.",
    },

    {
      icon: <Building2 size={40} />,
      title: "Franchise Partnership",
      description:
        "Partner with us for transport, cargo, and logistics franchise opportunities across Chhattisgarh.",
    },

    {
      icon: <Globe size={40} />,
      title: "PAN Chhattisgarh Network",
      description:
        "Strong transport connectivity and operational support across multiple states and major routes.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-yellow-500 uppercase tracking-widest font-semibold mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Reliable Logistics &
            <span className="text-yellow-500">
              {" "}Transportation Solutions
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            We provide dependable transportation, cargo,
            and logistics solutions designed to ensure
            safe and timely delivery operations across India.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-gray-800 rounded-3xl p-8 hover:border-yellow-500 transition duration-300 group"
            >

              <div className="text-yellow-500 mb-6 group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}

          

        </div>

        {/* ASSOCIATED NETWORK */}
<div className="mt-24">

  <div className="text-center mb-14">

    <p className="text-yellow-500 uppercase tracking-widest font-semibold mb-4">
      Network & Associations
    </p>

    <h2 className="text-4xl md:text-5xl font-bold">
      Associated Companies &
      <span className="text-yellow-500">
        {" "}Stations
      </span>
    </h2>

    <p className="text-gray-400 mt-6 text-lg">
      Strong logistics partnerships and operational
      connectivity across major transport locations.
    </p>

  </div>

  <div className="grid md:grid-cols-2 gap-8">

    {/* COMPANIES */}
    <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8">

      <h3 className="text-2xl font-bold mb-6">
        Associated Companies
      </h3>

      <div className="flex flex-wrap gap-4">

        <div className="px-5 py-3 rounded-full bg-black border border-yellow-500 text-yellow-500">
          Deepak Roadlines
        </div>

      </div>

    </div>

    {/* STATIONS */}
    <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8">

      <h3 className="text-2xl font-bold mb-6">
        Major Stations
      </h3>

      <div className="flex flex-wrap gap-4">

        {[
          "Raigarh",
          "Korba",
          "Raipur",
          "Bilaspur",
          "Durg",
          "Bhilai",
        ].map((station, index) => (
          <div
            key={index}
            className="px-5 py-3 rounded-full bg-black border border-gray-700 text-gray-300 hover:border-yellow-500 hover:text-yellow-500 transition duration-300"
          >
            {station}
          </div>
        ))}

      </div>

    </div>

  </div>

</div>

      </div>
    </section>
  );
}