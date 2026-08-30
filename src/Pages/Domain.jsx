import ecommerce from "../assets/ecommerce.jpg";
import photo from "../assets/photo.jpg";
import project from "../assets/project.jpg";
import { motion } from "motion/react";

export default function Domain() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mx-auto max-w-7xl p-8 mt-44 mb-16">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col justify-center md:w-1/2"
        >
          <h3 className="text-2xl md:text-4xl font-semibold text-black mb-6 tracking-tight leading-tight">
            Find the perfect
            <span className="font-extrabold text-indigo-700 font-poppins">
              {" "}
              domain name{" "}
            </span>
            available on the GoDaddy website at a cheap and a budget-friendly
            price for as low as a <span className="font-mono"> $1</span>.
          </h3>
          <p className="text-base font-medium text-slate-700">
            Your domain is the start of your online identity. Search, secure,
            and grow your brand today.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeIn" }}
          className="overflow-hidden w-full md:w-1/2 h-full"
        >
          <img
            src={ecommerce}
            alt="The best domain names ever"
            className="w-full h-98 object-cover rounded-2xl"
            loading="lazy"
          />
        </motion.section>
      </div>

      <div className="flex flex-col-reverse md:flex-row-reverse gap-12 mx-auto p-8 justify-center items-center mb-16">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center md:w-1/2"
        >
          <h3 className="text-2xl md:text-4xl font-semibold text-black mb-4 max-w-xl font-poppins">
            Big ideas start with a great domain.
          </h3>
          <p className="text-base font-medium text-gray-900">
            Secure your online address starting at just $0.99 for your first
            year. Privacy protection and easy setup included. Get a domain name
            for your business , entreprise and many more of your financial
            endeavours.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeIn" }}
          className="overflow-hidden w-full md:w-1/2 h-full"
        >
          <img
            src={photo}
            alt="The best place to get a domain name"
            className="w-full h-98 object-cover rounded-2xl"
            loading="lazy"
          />
        </motion.section>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mx-auto p-8">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center md:w-1/2"
        >
          <h3 className="font-semibold text-2xl md:text-4xl text-black mb-4 font-poppins">
            Claim your spot on the web
          </h3>
          <p className="text-base font-medium text-gray-700">
            From <span className="text-indigo-700 font-extrabold"> .com </span>{" "}
            to <span className="text-indigo-700 font-extrabold">.tech</span> ,
            discover available names that match your vision and get started in
            seconds.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeIn" }}
          className="overflow-hidden w-full h-full md:w-1/2"
        >
          <img
            src={project}
            alt="ecommerce logo"
            className="w-full h-98 object-cover rounded-2xl"
            loading="lazy"
          />
        </motion.section>
      </div>
    </>
  );
}
