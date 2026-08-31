import { Link } from "react-router-dom";
import { motion } from "motion/react";
import testimonial from "../assets/testimonial.jpg";
import testimonials from "../assets/testimonials.jpg";
import testimonialpics from "../assets/testimonialpics.jpg";

export default function ExportService() {
  return (
    <>
      <div className="mt-44">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center mx-16"
        >
          <h3 className="font-bold text-center text-2xl md:text-3xl mb-12 tracking-tight font-poppins">
            Let our experts build and grow your online presence
          </h3>
          <p className="text-center mb-12 text-base font-semibold tracking-tight">
            Custom websites, tailored marketing, and technical setup handled by
            dedicated specialists.
          </p>
          <button className="border bg-black text-white font-semibold text-base px-12 py-4 rounded-md cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all duration-300">
            <Link to="/more">Call an expert</Link>
          </button>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8 my-28"
        >
          <div className="border border-slate-300 bg-white px-12 py-16 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
              Custom Web Design
            </h3>
            <hr className="text-slate-400 mb-8" />
            <p className="text-base font-semibold text-slate-700 mb-8 font-poppins">
              Tailored website builds designed around brand goals.
            </p>
            <p className="text-base font-medium text-slate-700 font-poppins">
              Responsive alyout, custom branding, content upload, mobile
              optimizimation.
            </p>
          </div>

          <div className="border border-slate-300 bg-white px-12 py-16 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
              Manage SEO Services
            </h3>
            <hr className="text-slate-400 mb-8" />
            <p className="text-base font-semibold text-slate-700 mb-8 font-poppins">
              Ongoing search engine optimization to boost rankings.
            </p>
            <p className="text-base font-medium text-slate-700 font-poppins">
              Keyword strategy, content updates, monthly ranking reports.
            </p>
          </div>

          <div className="border border-slate-300 bg-white px-12 py-16 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
              Website Migration
            </h3>
            <hr className="text-slate-400 mb-8" />
            <p className="text-base font-semibold text-slate-700 mb-8 font-poppins">
              Hassle-free site transfer from another host or provider.
            </p>
            <p className="text-base font-medium text-slate-700 font-poppins">
              Files transfer, database migration zero-downtime DNS updates.
            </p>
          </div>

          <div className="border border-slate-300 bg-white px-12 py-16 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
              Logo & Graphic Design
            </h3>
            <hr className="text-slate-400 mb-8" />
            <p className="text-base font-semibold text-slate-700 mb-8 font-poppins">
              Custom visual identity assests for modern brands
            </p>
            <p className="text-base font-medium text-slate-700 font-poppins">
              Vector logos, colour palettes, social media branding kits.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center gap-8 mx-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-poppins text-center">
            Tell our team about your brand goals and requirements
          </h3>
          <p className="text-center text-base font-medium">
            Our specialists draft and build, and we push it live.
          </p>
          <p className="text-center text-base font-medium">
            You give feedback, approve the build, and we push it live.
          </p>
        </motion.section>

        <section className="flex flex-col md:flex-row justify-center items-center gap-8 mx-6 my-32">
          <div className="border border-slate-300 bg-white px-12 py-16 rounded-lg shadow-lg">
            <img
              src={testimonial}
              alt="testimonial"
              className="w-16 h-16 object-cover rounded-full mb-6"
            />
            <p className="font-medium text-lg tracking-tight mb-6">
              <span className="text-2xl">"</span> Handling off our website
              redesign to the Expert Services team was the best decision we
              made. Our bounce rate dropped instantly, and mobile traffic is up
              by 40%. Clean execution and zero stress.{" "}
              <span className="text-2xl">"</span>
            </p>
            <p className="font-medium text-slate-700 text-base">
              - Marcus T., E-commerce Founder
            </p>
          </div>

          <div className="border border-slate-300 bg-white px-12 py-16 rounded-lg shadow-lg">
            <img
              src={testimonials}
              alt="More testimonials"
              className="w-16 h-16 object-cover rounded-full mb-6"
            />
            <p className="font-medium text-lg tracking-tight mb-6">
              <span className="text-2xl">"</span> Migration and technical SEO
              felt daunting until we brought in an expert guide. They set up our
              custom domain, optimized our core web vitals , and kept everything
              running smooth with no downtime.
              <span className="text-2xl">"</span>
            </p>
            <p className="font-medium text-slate-700 text-base">
              - Sarah L., Digital Agency Lead
            </p>
          </div>

          <div className="border border-slate-300 bg-white px-12 py-16 rounded-lg shadow-lg">
            <img
              src={testimonialpics}
              alt="additonal content"
              className="w-16 h-16 object-cover rounded-full mb-6"
            />
            <p className="font-medium text-lg tracking-tight mb-6">
              <span className="text-2xl">"</span> I had a vision for my brand
              but zero time to code it out . They took my rough wireframe ideas
              and built a responsive landing page that launched ahead of
              schedule. Highly recommended! <span className="text-2xl">"</span>
            </p>
            <p className="font-medium text-slate-700 text-base">
              - DavidK., SaaS Product Creator
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
