import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {

  return (
    <footer className="bg-zinc-950 text-white border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* COMPANY */}
          <div>

            <h2 className="text-3xl font-bold">
              Shri Om
              <span className="text-yellow-500">
                {" "}Logistic
              </span>
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Reliable transportation and logistics services
              with 25+ years of trusted experience connecting
              North India to Chhattisgarh.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <a
                href="#home"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                About
              </a>

              <a
                href="#services"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                Services
              </a>

              <a
                href="#journey"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                Journey
              </a>

              <a
                href="#contact"
                className="text-gray-400 hover:text-yellow-500 transition"
              >
                Contact
              </a>

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Services
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>Transportation Services</p>
              <p>Lorry Booking</p>
              <p>Cargo Support</p>
              <p>Logistics Solutions</p>
              <p>Franchise Partnership</p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">

              <a
                href="tel:+919109288364"
                className="flex items-start gap-4 text-gray-400 hover:text-yellow-500 transition"
              >
                <Phone size={22} className="mt-1" />

                <span>
                  +91 9109288364
                </span>
              </a>

              <a
                href="mailto:shriomlogistics82@gmail.com"
                className="flex items-start gap-4 text-gray-400 hover:text-yellow-500 transition"
              >
                <Mail size={22} className="mt-1" />

                <span>
                  shriomlogistics82@gmail.com
                </span>
              </a>

              <a
                href="https://maps.google.com/?q=Gharumariya+Oddisa+Road+Shankar+Warehouse+Raigarh+Chhattisgarh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-gray-400 hover:text-yellow-500 transition"
              >
                <MapPin size={22} className="mt-1" />

                <span>
                  Raigarh, Chhattisgarh,
                  India
                </span>
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-14 pt-8 text-center">

          <p className="text-gray-500">
            © 2026 Shri Om Logistic. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}