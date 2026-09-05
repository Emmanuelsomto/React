import {
  FaGlobe,
  FaServer,
  FaShieldHalved,
  FaEnvelope,
  FaCreditCard,
  FaUser,
} from "react-icons/fa6";
import Help from "../Components/Help"; 
import { motion } from "motion/react";

const catergories = [
  {
    id: "domains",
    title: "Domains Names",
    icon: FaGlobe,
    count: "120+ articles",
    desc: "Registration transfers, DNS management, and renewal.",
  },

  {
    id: "hosting",
    title: "Web Hosting",
    icon: FaServer,
    count: "85+ articles",
    desc: "cPanel, WordPress setup, FTP access, and server configs.",
  },

  {
    id: "security",
    title: "SSL & Sercuity",
    icon: FaShieldHalved,
    count: "45+ articles",
    desc: "SSL certificates, malware removal, and site protection.",
  },

  {
    id: "email",
    title: "Email & Workspace",
    icon: FaEnvelope,
    count: "60+ articles",
    desc: "Professional email setup, Outlook integration, and MX records.",
  },

  {
    id: "billing",
    title: "Account & Billing",
    icon: FaCreditCard,
    count: "40+ articles",
    desc: "Payment methods, invoices, auto-renewals, and refunds.",
  },

  {
    id: "account",
    title: "Account Security",
    icon: FaUser,
    count: "30+ articles",
    desc: "2FA setup, password recovery, and delegate access.",
  },
];

export default function HelpCenter() {
  return (
    <>
      <div className="mt-32">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center gap-8 mx-6 mb-24"
        >
          <h3 className="text-2xl md:text-4xl font-bold font-poppins mx-6 text-center tracking-tighter">
            How can we help you today?
          </h3>
          <p className="text-center tracking-tight text-base font-medium text-slate-700">
            Search our knowledge base or browse products below. Everything you
            need to manage your site and services.
          </p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-6"
        >
          {catergories.map((item) => (
            <Help
              key={item.id}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}
