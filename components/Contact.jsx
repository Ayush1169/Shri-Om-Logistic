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

            <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8 flex gap-5">
              <MapPin className="text-yellow-500" size={35} />

              <div>
                <h3 className="text-2xl font-bold">
                  Office Address
                </h3>

                <a
  href="https://maps.google.com/?q=Gharumariya+Oddisa+Road+Shankar+Warehouse+Raigarh+Chhattisgarh"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 mt-2 block hover:text-yellow-500 transition"
>
  Gharumariya, Oddisa Road,
  Shankar Warehouse,
  Raigarh, Chhattisgarh
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
          <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8">

            <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-6"
>

    <input
  type="hidden"
  name="access_key"
  value="3dc30042-da19-46d1-b63b-2c9e8b125b91"
/>

<input
  type="hidden"
  name="subject"
  value="New Transport Inquiry"
/>

<input
  type="hidden"
  name="from_name"
  value="Shri Om Logistic Website"
/>

<input
  type="hidden"
  name="redirect"
  value="http://localhost:3000"
/>

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 rounded-2xl transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}