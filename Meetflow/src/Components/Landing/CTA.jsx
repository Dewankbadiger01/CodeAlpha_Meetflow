import React from "react";

const CTA = () => {
  return (
    <section className="py-24 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-white">
          Ready to Collaborate Smarter?
        </h2>

        <p className="mt-6 text-blue-100 text-lg">
          Start your first meeting today and connect with your team from
          anywhere in the world.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>

          <button className="border border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition">
            Join Meeting
          </button>

        </div>

      </div>
    </section>
  );
};

export default CTA;