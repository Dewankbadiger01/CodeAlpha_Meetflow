import React from "react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-linear-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mt-6 text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Connect,
              <span className="text-blue-600"> Collaborate </span>
              and Meet
              <br />
              From Anywhere
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              MeetFlow lets teams connect through HD video meetings,
              screen sharing, live chat, and interactive whiteboards—
              all in one secure platform.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 text-white px-7 py-3 rounded-xl hover:bg-blue-700 transition">
                Start Meeting
              </button>
              <button className="border border-blue-600 text-blue-600 px-7 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition">
                Join Meeting
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-gray-700 font-medium">
              <span>✔ HD Video</span>
              <span>✔ Secure</span>
              <span>✔ Screen Sharing</span>
              <span>✔ Live Chat</span>
            </div>
          </div>
          <div className="flex justify-center">

            <div className="w-full max-w-lg h-105 bg-white rounded-3xl shadow-2xl border p-6">

              <div className="grid grid-cols-2 gap-4 h-full">

                <div className="bg-blue-100 rounded-xl"></div>

                <div className="bg-gray-200 rounded-xl"></div>

                <div className="bg-gray-200 rounded-xl"></div>

                <div className="bg-blue-200 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;