"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

export default function Contact() {


  return (
    <section
      id="contact"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-yellow-500 uppercase tracking-widest font-semibold mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Get In Touch For
            <span className="text-yellow-500">
              {" "}Reliable Transport Solutions
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Contact us today for transportation,
            cargo support, logistics solutions,
            or franchise partnership inquiries.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 mt-20">

          {/* LEFT INFO */}
          <div className="space-y-8">

            <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8 flex gap-5">
              <Phone className="text-yellow-500" size={35} />

              <div>
                <h3 className="text-2xl font-bold">
                  Phone Number
                </h3>

                <a
  href="tel:+919109288364"
  className="text-gray-400 mt-2 block hover:text-yellow-500 transition"
>
  +91 9109288364
</a>
              </div>
            </div>

            <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8 flex gap-5">
              <Mail className="text-yellow-500" size={35} />

              <div>
                <h3 className="text-2xl font-bold">
                  Email Address
                </h3>

                <a
  href="mailto:shriomlogistics82@gmail.com"
  className="text-gray-400 mt-2 block hover:text-yellow-500 transition"
>
  shriomlogistics82@gmail.com
</a>
              </div>
            </div>

            <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8">

  <div className="flex items-center gap-4 mb-6">

    <MapPin className="text-yellow-500" size={35} />

    <h3 className="text-2xl font-bold">
      Office Locations
    </h3>

  </div>

  <div className="grid sm:grid-cols-2 gap-4">

    {/* RAIGARH */}
    <a
      href="https://maps.app.goo.gl/8GEJLJ9NeYcAQMEDA?g_st=awb"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black border border-gray-700 rounded-2xl p-5 hover:border-yellow-500 transition duration-300"
    >

      <h4 className="text-yellow-500 font-bold text-lg">
        RAIGARH
      </h4>

      <p className="text-gray-400 mt-2 text-sm">
        View Office Location
      </p>

    </a>

    {/* KORBA */}
    <a
      href="https://maps.app.goo.gl/4gv18d5VcoVcyfHU8?g_st=awb"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black border border-gray-700 rounded-2xl p-5 hover:border-yellow-500 transition duration-300"
    >

      <h4 className="text-yellow-500 font-bold text-lg">
        KORBA
      </h4>

      <p className="text-gray-400 mt-2 text-sm">
        View Office Location
      </p>

    </a>

  </div>

</div>

            <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8 flex gap-5">
              <Clock3 className="text-yellow-500" size={35} />

              <div>
                <h3 className="text-2xl font-bold">
                  Business Hours
                </h3>

                <p className="text-gray-400 mt-2">
                  Monday - Saturday
                  <br />
                  9:00 AM - 7:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
         {/* WORKING STATIONS */}
<div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8">

  <h3 className="text-2xl font-bold mb-6">
    WORKING STATIONS
  </h3>

  <div className="space-y-5">

    {/* RAIGARH */}
    <a
      href="https://maps.app.goo.gl/8GEJLJ9NeYcAQMEDA?g_st=awb"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-black border border-gray-700 rounded-2xl p-5 hover:border-yellow-500 transition duration-300"
    >

      <h4 className="text-yellow-500 text-xl font-bold">
        RAIGARH
      </h4>

      <p className="text-gray-400 mt-3">
        +91 9993263980
        <br />
        +91 9826136082
      </p>

    </a>

    {/* KORBA */}
    <a
      href="https://maps.app.goo.gl/4gv18d5VcoVcyfHU8?g_st=awb"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-black border border-gray-700 rounded-2xl p-5 hover:border-yellow-500 transition duration-300"
    >

      <h4 className="text-yellow-500 text-xl font-bold">
        KORBA
      </h4>

      <p className="text-gray-400 mt-3">
        +91 9109288364
        <br />
        +91 8962857699
      </p>

    </a>

  </div>

</div>

        </div>

      </div>
    </section>
  );
}