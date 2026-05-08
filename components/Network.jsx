import {
  MapPinned,
  Truck,
  Globe2,
  Building2,
} from "lucide-react";

export default function Network() {

  const locations = [
    "Delhi",
    "Punjab",
    "Haryana",
    "Uttar Pradesh",
    "Raigarh",
    "Korba",
    "Raipur",
    "Bilaspur",
    "Durg",
    "Bhilai",
  ];

  return (
    <section className="bg-black text-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-yellow-500 uppercase tracking-widest font-semibold mb-4">
            Our Network
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Strong Transportation Presence
            <span className="text-yellow-500">
              {" "}Across India
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            We provide reliable transport and logistics support
            connecting North India to major industrial and commercial
            locations across Chhattisgarh.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 mt-20 items-center">

          {/* LEFT SIDE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8 min-h-[260px] flex flex-col justify-center">

              <Truck className="text-yellow-500 mb-5" size={45} />

              <h3 className="text-3xl font-bold">
                25+
              </h3>

              <p className="text-gray-400 mt-3">
                Years Of Transportation Experience
              </p>

            </div>

            <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8 min-h-[260px] flex flex-col justify-center">

              <Globe2 className="text-yellow-500 mb-5" size={45} />

              <h3 className="text-3xl font-bold">
                PAN Chhatisgarh
              </h3>

              <p className="text-gray-400 mt-3">
                Logistics & Transport Connectivity
              </p>

            </div>

            <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8 min-h-[260px] flex flex-col justify-center">

              <Building2 className="text-yellow-500 mb-5" size={45} />

              <h3 className="text-3xl font-bold">
                Trusted
              </h3>

              <p className="text-gray-400 mt-3">
                Franchise & Business Partnerships
              </p>

            </div>

            <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8 min-h-[260px] flex flex-col justify-center">

              <MapPinned className="text-yellow-500 mb-5" size={45} />

              <h3 className="text-3xl font-bold">
                Multiple
              </h3>

              <p className="text-gray-400 mt-3">
                Operational Routes Across India
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-zinc-900 border border-gray-800 rounded-[40px] p-10">

            <h3 className="text-3xl font-bold mb-8">
              Major Service Locations
            </h3>

            <div className="flex flex-wrap gap-4">

              {locations.map((location, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-black border border-gray-700 text-gray-300 hover:border-yellow-500 hover:text-yellow-500 transition duration-300"
                >
                  {location}
                </div>
              ))}

            </div>

            {/* BOTTOM TEXT */}
            <div className="mt-10 border-t border-gray-800 pt-8">

              <p className="text-gray-400 leading-relaxed">
                We continue to expand our logistics operations
                with trusted transportation services, efficient
                cargo handling, and reliable delivery support
                connecting businesses across India.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}