import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Website() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-44 text-center mx-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold md:font-extrabold mb-12 font-poppins tracking-tight">
          Fast, Secure, and Reliable Web Hosting.
        </h1>
        <p className="text-base font-medium mb-12 tracking-tight">
          Bring your business online with{" "}
          <span className="text-indigo-700 font-bold text-lg"> 99.9% </span>{" "}
          uptime, free SSL certificate, and one-click WordPress installs.
        </p>
        <button className="border px-8 py-4 mb-12 rounded-md bg-black text-white font-semibold cursor-pointer hover:bg-slate-700 active:bg-gray-800 transition-all ease-in-out duration-300">
          <Link to="/more">Explore Hosting Plan</Link>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.8, ease: "easeOut"}}
        className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 mt-12 mb-24 mx-4">
        <section className="border border-slate-300 bg-white px-12 py-15 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8">Starter</h2>
          <hr className="mb-4 text-slate-400" />
          <p className="text-lg font-semibold text-slate-900 font-poppins mb-6 tracking-tight">
            Basic blogs & landing pages
          </p>
          <p className="text-base font-normal text-slate-900 mb-6">
            1 Website, 25 GB Storage, Free Unlimited Bandwidth.
          </p>
          <Link to="/cart">
            <button className="border bg-black text-white px-4 py-3 hover:bg-gray-700 ease-in-out duration-300 transition-all rounded-md cursor-pointer font-semibold text-lg font-poppins">
              $2.99 / month
            </button>
          </Link>
        </section>

        <section className="border border-slate-300 bg-white px-12 py-14 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8">Deluxe</h2>
          <hr className="mb-4 text-slate-400" />
          <p className="text-lg font-semibold text-slate-900 mb-6 font-poppins tracking-tight">
            Growing sites & multiple brands
          </p>
          <p className="text-base font-normal text-slate-700 mb-8">
            Unlimited Websites, 50 GB Storage, Free SSL Certificate.
          </p>
          <Link to="/cart">
            <button className="border bg-black text-white px-4 py-3 hover:bg-gray-700 ease-in-out duration-300 transition-all rounded-md cursor-pointer font-semibold text-lg font-poppins">
              $5.99 / month
            </button>
          </Link>
        </section>

        <section className="border border-slate-300 bg-white px-12 py-14 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8">Ultimate</h2>
          <hr className="mb-4 text-slate-400" />
          <p className="text-lg font-semibold text-slate-900 mb-6 font-poppins">
            High-traffic sites & stores
          </p>
          <p className="text-base font-normal text-slate-700 mb-8">
            Unlimited Storage, Free Domain, Enhanced CPU & RAM.
          </p>
          <Link to="/cart">
            <button className="border bg-black text-white px-4 py-3 hover:bg-gray-700 ease-in-out duration-300 transition-all rounded-md cursor-pointer font-semibold text-lg font-poppins">
              $9.99 / month
            </button>
          </Link>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.8, ease: "easeOut"}}
        className="flex flex-col md:flex-row justify-center items-center gap-12 mx-6">
        <section className="border border-slate-300 bg-white px-12 py-10 shadow-lg rounded-lg">
          <h3 className=" text-base md:text-lg font-medium mb-8 font-poppins text-black tracking-tighter">
            " Build a modern site in minutes with customizable templates,
            built-in SEO tools, and integrated online payments "
          </h3>
          <button className="border bg-black text-white px-5 py-4 font-semibold rounded-md hover:bg-slate-700 active:bg-slate-700 duration-200 ease-in-out transition-colors cursor-pointer">
            <Link to="/more">Start building Free</Link>
          </button>
        </section>

        <section className="border border-slate-300 bg-white px-12 py-8.5 shadow-lg rounded-lg">
          <h3 className="text-base md:text-lg font-medium mb-10 font-poppins text-black tracking-tighter">
            " Optimized speed, automatic updates, and daily backups built
            specifically for custom WordPress sites "
          </h3>
          <button className="border bg-black text-white px-3.5 md:px-5 py-4 font-semibold rounded-md hover:bg-slate-700 active:bg-slate-700 duration-200 ease-in-out transition-colors mt-2 cursor-pointer">
            <Link to="/more">View WordPress Plans</Link>
          </button>
        </section>
      </motion.div>
    </>
  );
}
