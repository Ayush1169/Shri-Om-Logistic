import {
  ShieldCheck,
  Clock3,
  Truck,
  Users,
  Globe2,
  BadgeCheck,
} from "lucide-react";

export default function WhyChooseUs() {

  const features = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Safe Deliveries",
      description:
        "Every shipment is handled with professionalism, safety, and responsibility for secure transportation.",
    },

    {
      icon: <Clock3 size={40} />,
      title: "On-Time Service",
      description:
        "We focus on timely transportation operations with reliable delivery schedules and smooth logistics support.",
    },

    {
      icon: <Truck size={40} />,
      title: "25+ Years Experience",
      description:
        "Decades of transportation expertise serving businesses across North India and Chhattisgarh.",
    },

    {
      icon: <Users size={40} />,
      title: "Trusted Partnerships",
      description:
        "Strong industry relationships and dependable franchise support for long-term business growth.",
    },

    {
      icon: <Globe2 size={40} />,
      title: "Wide Transport Network",
      description:
        "Extensive logistics connectivity across Delhi, Punjab, Haryana, UP, and Chhattisgarh.",
    },

    {
      icon: <BadgeCheck size={40} />,
      title: "Professional Service",
      description:
        "Customer-focused transportation solutions with transparent communication and quality operations.",
    },
  ];

  return (
    <section
      className="bg-zinc-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-yellow-500 uppercase tracking-widest font-semibold mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Trusted Logistics Partner
            <span className="text-yellow-500">
              {" "}For Reliable Transportation
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            With decades of experience, strong transport networks,
            and customer-focused operations, we deliver dependable
            logistics solutions tailored for business success.
          </p>

        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-yellow-500 transition duration-300 group"
            >

              <div className="text-yellow-500 mb-6 group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}