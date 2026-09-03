import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import godaddylogo from "../assets/godaddylogo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-300 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6
      ">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 font-black text-2xl font-serif shrink-0"
          >
            <img src={godaddylogo} alt="GoDaddy Logo" className="w-6 h-6" />
            <span>GoDaddy</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/domain-name"
              className="font-medium text-sm text-slate-600 hover:text-black transition-colors"
            >
              Domain Names
            </Link>
            <Link
              to="/website-hosting"
              className="font-medium text-sm text-slate-600 hover:text-black transition-colors"
            >
              Website & Hosting
            </Link>
            <Link
              to="/commerce"
              className="font-medium text-sm text-slate-600 hover:text-black transition-colors"
            >
              Commerce
            </Link>
            <Link
              to="/email-marketing"
              className="font-medium text-sm text-slate-600 hover:text-black transition-colors"
            >
              Email & Marketing
            </Link>
            <Link
              to="/export-service"
              className="font-medium text-sm text-slate-600 hover:text-black transition-colors"
            >
              Export Service
            </Link>
            <Link
              to="/more"
              className="font-medium text-sm text-slate-600 hover:text-black transition-colors"
            >
              More
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/help-center"
              className="font-medium text-sm text-slate-600 hover:text-black transition-colors"
            >
              Help Center
            </Link>
            <Link
              to="/sign-in"
              className="font-medium text-sm text-slate-600 hover:text-black transition-colors"
            >
              Sign-In
            </Link>
          </div>

          <Link to="/cart" onClick={closeMenu} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-slate-700 hover:text-black transition-colors"
            >
              <path d="M21 4H6.17l-.18-1.15A1 1 0 0 0 5 2H2v2h2.14l1.87 12.15A1 1 0 0 0 7 17h12v-2H7.86l-.31-2H19c.45 0 .84-.3.96-.73l2-7A1 1 0 0 0 21 3.99Zm-2.75 7H7.24l-.77-5h13.2l-1.43 5ZM8 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path>
            </svg>
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            className="flex md:hidden items-center justify-center p-1 text-slate-700 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl px-6 py-6 flex flex-col items-center justify-center text-center z-50">
          <Link
            to="/domain-name"
            onClick={closeMenu}
            className="w-full font-medium text-slate-800 hover:text-black py-2 border-b border-slate-100"
          >
            Domain Names
          </Link>
          <Link
            to="/website-hosting"
            onClick={closeMenu}
            className="w-full font-medium text-slate-800 hover:text-black py-2 border-b border-slate-100"
          >
            Website & Hosting
          </Link>
          <Link
            to="/commerce"
            onClick={closeMenu}
            className="w-full font-medium text-slate-800 hover:text-black py-2 border-b border-slate-100"
          >
            Commerce
          </Link>
          <Link
            to="/email-marketing"
            onClick={closeMenu}
            className="w-full font-medium text-slate-800 hover:text-black py-2 border-b border-slate-100"
          >
            Email & Marketing
          </Link>
          <Link
            to="/export-service"
            onClick={closeMenu}
            className="w-full font-medium text-slate-800 hover:text-black py-2 border-b border-slate-100"
          >
            Export Service
          </Link>
          <Link
            to="/more"
            onClick={closeMenu}
            className="w-full font-medium text-slate-800 hover:text-black py-2 border-b border-slate-100"
          >
            More
          </Link>
          <div className="pt-2 flex flex-col items-center gap-3 w-full">
            <Link
              to="/help-center"
              onClick={closeMenu}
              className="font-medium text-slate-600 hover:text-black py-1"
            >
              Help Center
            </Link>
            <Link
              to="/sign-in"
              onClick={closeMenu}
              className="font-medium text-slate-600 hover:text-black py-1"
            >
              Sign-In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
