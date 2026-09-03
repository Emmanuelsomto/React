import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { motion} from "framer-motion";

const accordionData = [
  {
    id: "regulations",
    title: "Trade & Regulatory Compliance",
    content: (
      <p>
        Our platform adheres to international trade regulations, including
        compliance with the U.S. Department of Foreign Assests Control (DFAC)
        and international export control laws.
      </p>
    ),
  },

  {
    id: "sanctions",
    title: "Sanction Regions & Restricted Entities",
    content: (
      <p>
        Services including domain registrations, web hosting, and cloud
        infrastructure cannot be provisioned to sanctioned countries (eg., Cuba,
        Iran, North Korea, Syria, Crimea) or individuals on restricted party
        lists.
      </p>
    ),
  },

  {
    id: "crypto",
    title: "Encryption & Technology Controls",
    content: (
      <p>
        High-grade encryption products, SSL/TLS certificates, and software
        exports provided through our platform are subject to Export
        Administration Regulations (EAR).
      </p>
    ),
  },

  {
    id: "verification",
    title: "Account Verification & Hold Policies",
    content: (
      <p>
        Accounts flagged during automated sanction screening null undergo
        compliance review. Failure to verify entity details may result in
        sservice suspension or account termination.
      </p>
    ),
  },
];

export default function More() {
  const [openId, setOpenId] = useState(null);
  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <>
      <div className="mt-44">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center mx-12 mb-24"
        >
          <h3 className="font-bold font-poppins text-2xl md:text-3xl text-center mb-8">
            Export Compliance & Trade Controls
          </h3>
          <p className="text-center text-slate-700 text-base tracking-tight">
            Ensuring global regulatory adherence, security, and restricted
            country compliance across all services.
          </p>
        </motion.section>

        <section>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center font-bold text-2xl font-poppins mb-12"
          >
            Export Control & Policy FAQs
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-3"
          >
            {accordionData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="border border-slate-300 rounded-md overflow-hidden mx-8 shadow-lg"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex justify-between items-center p-6 bg-white font-poppins hover:bg-slate-100 text-left text-slate-700 font-bold transition-colors duration-150"
                  >
                    <span>{item.title}</span>

                    <FaChevronDown
                      className={`w-5 h-5 cursor-pointer text-gray-500 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-6 bg-white text-slate-700 text-base leading-relaxed border-t border-slate-300">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </section>
      </div>
    </>
  );
}
