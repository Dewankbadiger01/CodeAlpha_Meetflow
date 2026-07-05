import React from "react";
import { UserPlus, Video, Users } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={30} />,
    title: "Create an Account",
    description:
      "Sign up in seconds and access your personal meeting dashboard.",
  },
  {
    icon: <Video size={30} />,
    title: "Start or Join a Meeting",
    description:
      "Create a meeting instantly or join using a secure meeting ID.",
  },
  {
    icon: <Users size={30} />,
    title: "Collaborate Together",
    description:
      "Chat, share your screen, draw on the whiteboard, and work as a team.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            How MeetFlow Works
          </h2>

          <p className="mt-4 text-gray-600">
            Get started in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;