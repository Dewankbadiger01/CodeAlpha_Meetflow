import React from "react";
import {
  Video,
  MessageSquare,
  Monitor,
  Pencil,
  FolderOpen,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Video size={30} />,
    title: "HD Video Meetings",
    description:
      "Experience crystal-clear video and audio for smooth collaboration.",
  },
  {
    icon: <MessageSquare size={30} />,
    title: "Live Chat",
    description:
      "Chat with participants instantly during meetings.",
  },
  {
    icon: <Monitor size={30} />,
    title: "Screen Sharing",
    description:
      "Present your screen with just one click.",
  },
  {
    icon: <Pencil size={30} />,
    title: "Interactive Whiteboard",
    description:
      "Brainstorm ideas together using a collaborative whiteboard.",
  },
  {
    icon: <FolderOpen size={30} />,
    title: "File Sharing",
    description:
      "Share PDFs, images, documents, and more in real time.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Secure Meetings",
    description:
      "Protected with JWT authentication and encrypted communication.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Everything You Need
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            MeetFlow provides all the essential collaboration tools in one
            simple and secure platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;