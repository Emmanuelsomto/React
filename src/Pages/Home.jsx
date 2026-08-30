import lady from "../assets/lady.jpg";
import pos from "../assets/pos.jpg";
import snowy from "../assets/snowy.jpg";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="flex flex-row justify-center items-center mt-44 gap-2">
        <input
          type="search"
          onClick={() => {
            console.log("User is searching for a domain name");
          }}
          placeholder="Search for an available domain name"
          className="border px-6 py-4 border-slate-300 bg-white w-1/2 h-full font-medium focus:ring-2 focus:outline-none focus:ring-black focus:border-transparent transition-all duration-200"
        />
        <button
          onClick={() => {
            console.log("User is searching for a domain name");
          }}
          className="border px-4 py-3 md:px-6 md:py-4 bg-black text-white font-semibold rounded-md cursor-pointer hover:bg-gray-700 active:bg-gray-700 ease-in-out duration-200"
        >
          Search Domain
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-center items-center gap-6 mt-20 mb-12 p-6 mx-auto max-w-7xl"
      >
        <section className="border border-slate-300 bg-white px-16 py-14 rounded-lg h-full w-full md:w-1/2 shadow-lg">
          <h3 className="font-medium mb-6 text-base">Websites & Commerce</h3>
          <h1 className="font-bold text-2xl md:text-4xl font-serif mb-8">
            Tools for all your businesses first.
          </h1>
          <p className="font-semibold mb-4">
            Website and store solutions for any small business.
          </p>

          <div className="flex gap-6 mb-6">
            <Link to="/commerce">
              <button className="border px-4 md:px-10 py-3 bg-black font-normal md:font-semibold text-white rounded-lg cursor-pointer hover:bg-gray-700 active:bg-gray-600 transition-colors ease-in-out">
                Get Started
              </button>
            </Link>
            <Link
              to="/"
              className="mt-2 font-normal text-base text-slate-800 hover:underline"
            >
              Learn More
            </Link>
          </div>

          <p className="text-base font-normal">No credit card required</p>
        </section>

        <section className="bg-white border border-slate-300 py-12 px-16 max-w-xl rounded-lg h-full w-full md:w-1/2 shadow-lg">
          <h3 className="font-semibold font-poppins text-base mb-6">
            Domain Names
          </h3>
          <h1 className="text-2xl font-bold mb-6">
            Grab a <span className="text-indigo-700"> .com </span> for just
            $0.01* /1st yr
          </h1>
          <p className="font-medium text-lg mb-6">2-year purchase required*</p>
          <Link to="/domain-name">
            <button className="border px-4 md:px-16 py-3 bg-black text-white font-normal md:font-semibold text-base md:text-lg mb-8 rounded-lg cursor-pointer hover:bg-gray-700 active:bg-gray-600 transition-colors ease-in-out duration-200">
              Find Your Domain
            </button>
          </Link>
          <p className="mb-6 font-medium text-base text-gray-700">
            Transfer Your Domain
          </p>
          <p className="font-medium text-base text-gray-700 tracking-tight">
            Domains include free privacy protection
          </p>
        </section>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="text-center font-bold text-xl md:text-3xl font-poppins my-16 mx-4"
      >
        Success in 3 easy steps.
      </motion.p>

      <section
        className="flex flex-col md:flex-row justify-center items-center gap-6 mx-6 mb-16">
        <div className="border border-slate-300 bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src={lady}
            alt="Lady using a laptop"
            className="w-full h-full mb-8 object-cover"
            loading="lazy"
          />

          <div className="mx-8 mb-10">
            <p className="font-semibold text-2xl mb-5">01</p>
            <h3 className="text-2xl font-bold mb-4">
              Save with the lowest fees
            </h3>
            <p className="text-base font-medium text-gray-700 mb-2">
              2.3% + 0¢ per in person transaction.
            </p>
            <p className="text-base font-medium text-gray-700 mb-2">
              2.3% + 30¢ per in online transaction.
            </p>
            <p className="text-base font-medium text-gray-700 mb-2">
              Enjoy the lowest transaction fees compared to the other leading
              providers.
            </p>

            <div className="flex flex-row gap-4 my-8">
              <button className="bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700 active:text-gray-800 cursor-pointer">
                Start Getting Paid
              </button>
              <Link
                to="/"
                className="mt-3 font-medium text-base text-slate-900 hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="border border-slate-300 bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src={snowy}
            alt="Snowy weather"
            className="w-full h-full object-cover mb-8"
            loading="lazy"
          />

          <div className="mx-8 mb-8">
            <p className="font-semibold text-2xl mb-8">02</p>
            <h3 className="text-2xl font-bold mb-4">
              Sell online with a website
            </h3>
            <p className="text-base font-medium text-gray-700">
              Sell anything from physical products to downloads and services,
              and manage it all in one place.
            </p>

            <div className="flex flex-row gap-4 my-8">
              <button className="bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700 active:text-gray-800  mb-8 cursor-pointer">
                Get Started
              </button>
              <Link
                to="/"
                className="mt-3 hover:underline font-medium text-base text-slate-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="border border-slate-300 bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src={pos}
            alt="POS Terminal"
            className="w-full h-full object-cover mb-8"
            loading="lazy"
          />

          <div className="mx-8 mb-10">
            <p className="font-semibold text-2xl mb-6">03</p>
            <h3 className="text-2xl font-bold mb-8">
              Sell in-person and on the go
            </h3>
            <p className="text-base font-medium text-gray-700">
              Our new Point Of Sale devices are designed to fit any business and
              budget. Choose the one that's right for you.
            </p>

            <button
              to="/"
              className="bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700 active:text-gray-800  mt-10 cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
