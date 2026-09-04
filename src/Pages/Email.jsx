import { Link } from "react-router-dom";
import { FaEnvelope, FaBullhorn, FaShareAlt } from "react-icons/fa";
import FeatureCard from "../Components/FeatureCard";
import { motion } from "motion/react";
import Pricing from "../Components/Pricing";

const features = [
  {
    id: 0,
    icon: FaEnvelope,
    title: "Professional Email",
    description:
      "Gain client trust with a custom email address matching your domain name.",
  },

  {
    id: 1,
    icon: FaBullhorn,
    title: "Email Marketing",
    description:
      "Create and send custom neewsletters and track conversion rates effortlessly.",
  },

  {
    id: 2,
    icon: FaShareAlt,
    title: "Social Media Suite",
    description:
      "Manage, publish, and schedule content across all platforms from one dashboard.",
  },
];

const pricing = [
  {
    id: 0,
    title: "Email Essentials",
    price: "$2.99/month",
    description: "10GB storage, custom domain email, anti-spam security and many more.",
  },

  {
    id: 1,
    title: "Digital Marketing Essentials",
    price: "$14.99/month",
    description:
      "Custom email + 10,000 email sends/month, social media post scheduler.",
  },

  {
    id: 2,
    title: "Marketing Deluxe",
    price: "$21.99/month",
    description:
      "Unlimited email sends, social ads manager, advanced analytics dashboard.",
  },
];

export default function Email() {
  return (
    <>
      <div className="mt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center mx-8"
        >
          <h1 className="font-bold text-center text-2xl md:text-3xl mb-8 tracking-tight font-poppins">
            Connect with your audience using Professional Email & Marketing
            tools
          </h1>
          <h3 className="text-center mb-8 text-base font-semibold tracking-tight">
            Build customer trust with custom domain-based email addressess and
            targeted marketing campaigns
          </h3>
          <button className="border bg-black text-white px-12 py-4 font-semibold rounded-md cursor-pointer hover:bg-slate-700 active:bg-slate-800 ease-in-out duration-300 transition-all">
            <Link to="/more">Get Started Free</Link>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 mx-6 mt-24"
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mt-24 text-2xl font-bold font-poppins"
        >
          Pricing Comparison
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8 mx-6"
        >
          {pricing.map((item) => (
            <Pricing
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}
