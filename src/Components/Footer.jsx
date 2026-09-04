import godaddylogo from "../assets/godaddylogo.svg";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";
import { motion } from "motion/react";

const socialLinks = [
  { name: "facebook", href: "https://www.facebook.com/GoDaddy" },
  { name: "twitter", href: "https://twitter.com/GoDaddy" },
  { name: "instagram", href: "https://www.instagram.com/GoDaddy" },
  { name: "YouTube", href: "https://www.youtube.com/user/GoDaddy" },
];

export default function Footer() {
  return (
    <>
      <div className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-row justify-start items-center"
        >
          <div className="flex flex-col md:flex-row justify-center items-center mx-auto gap-16 lg:gap-24">
            <div className="flex flex-col">
              <h3 className="font-medium text-lg md:text-2xl mb-4">
                Sign up for news and special offers
              </h3>
              <input
                type="email"
                className="border px-4 py-2 rounded-sm w-full h-full mb-4"
                placeholder="Email address"
                required
                minLength="3"
                maxLength="36"
              />
              <button
                type="submit"
                className="bg-black text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-700 active:text-gray-800 cursor-pointer"
              >
                Sign Up
              </button>
            </div>
            <div className="flex flex-col max-w-xl">
              <p className="font-medium text-center text-base mb-4">
                We love taking your call.
              </p>
              <span className="flex justify-center items-center text-2xl font-medium hover:underline cursor-pointer">
                <img src={godaddylogo} alt="GoDaddy Logo" className="w-6 h-6" />
                GoDaddy guides
              </span>
            </div>
            <div className="flex gap-4 mx-8 mb-4">
              {socialLinks.map((link) => (
                <SocialIcon
                  key={link.name}
                  name={link.name.toLowerCase()}
                  href={link.href}
                />
              ))}
            </div>
          </div>
        </motion.div>
        <hr className="my-24 text-slate-400"></hr>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mx-8 mb-10 mt-8"
      >
        <section className="flex flex-col gap-3">
          <p className="font-bold text-lg">About GoDaddy</p>
          <Link to="/" className="text-gray-900 hover:underline">
            About us
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Newscreen
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Investor Relations
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Careers
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Coporate Responsibility
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Trust Center
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Legal
          </Link>
        </section>

        <section className="flex flex-col gap-3">
          <p className="font-bold text-lg">Help Center</p>
          <Link to="/" className="text-gray-900 hover:underline">
            Help Center
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Community
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Venture Forward: Microbusiness Data
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            GoDaddy blog
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Contact Us
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Report Abuse
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Resources
          </Link>
        </section>

        <section className="flex flex-col gap-3">
          <p className="font-bold text-lg">Resources</p>
          <Link to="/" className="text-gray-900 hover:underline">
            Webmail
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            WHOIS
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            GoDaddy Mobile App
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Designers & Developers
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Redeem Code
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Videos
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Product Catalog
          </Link>
        </section>

        <section className="flex flex-col gap-3">
          <p className="font-bold text-lg">Account</p>
          <Link to="/" className="text-gray-900 hover:underline">
            My Products
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Renewals & Billing
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Create Account
          </Link>
        </section>

        <section className="flex flex-col gap-3">
          <p className="font-bold text-lg">Shopping</p>
          <Link to="/" className="text-gray-700 hover:underline">
            Buy A Domain
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Websites
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            WordPress
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Hosting
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Web Security
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Email & Office
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Phone Numbers
          </Link>
        </section>

        <section className="flex flex-col gap-3">
          <p className="font-bold text-lg">Partner Programs</p>
          <Link to="/" className="text-gray-900 hover:underline">
            Affiliates
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            Reseller Programs
          </Link>
          <Link to="/" className="text-gray-900 hover:underline">
            GoDaddy Pro
          </Link>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-start items-center gap-6 mx-8 mb-8 mt-24"
      >
        <div className="flex justify-center items-center font-semibold text-2xl">
          <img src={godaddylogo} alt="GoDaddy Logo" className="w-6 h-6" />
          <span>GoDaddy</span>
        </div>
        <select className="items-center font-normal border px-2 py-1 rounded-sm cursor-pointer">
          <option>United States-English</option>
          <option>United Kingdom-English</option>
          <option>Chinese (Mandarin)</option>
        </select>
        <select className="items-center font-normal border px-2 py-1 rounded-sm cursor-pointer">
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </motion.div>
      <hr className="text-slate-400" />

      <p className="max-w-6xl mx-8 my-8 font-normal text-base tracking-tighter">
        CopyRight &copy; 1999 -2026 GoDaddy Operating Company. LLC. AllRights
        Reserved. The GoDaddy word mark is a registered trademark of GoDaddy
        Operating Company. LLC in the US and other countries. The 'GO' logo is a
        registered.
      </p>
    </>
  );
}
