import { Link } from "react-router-dom";
import godaddylogo from "../assets/godaddylogo.svg";

export default function Navbar() {
  return (
      <nav className="flex justify-between items-center mx-4 my-3 px-10 py-8 gap-12 border border-slate-300 bg-white shadow-lg rounded-md fixed top-0 left-0 z-50 lg:justify-center lg:items-center">
        <div className="flex justify-center items-center gap-6">
          <Link
            to="/"
            className="flex justify-center items-center font-black text-2xl font-serif"
          >
            <img src={godaddylogo} alt="GoDaddy Logo" className="w-6 h-6" />
            <span>GoDaddy</span>
          </Link>
          <Link
            to="/domain-name"
            className=" hidden md:flex font-medium text-base text-slate-600 hover:text-black active:text-gray-800 transition-colors duration-200"
          >
            Domain Names
          </Link>
          <Link
            to="/website-hosting"
            className="hidden md:flex font-medium text-base text-slate-600  hover:text-black active:text-gray-800  transition-colors duration-200"
          >
            Website & Hosting
          </Link>
          <Link
            to="/commerce"
            className="hidden md:flex font-medium text-base text-slate-600  hover:text-black active:text-gray-800  transition-colors duration-200"
          >
            Commerce
          </Link>
          <Link
            to="/email-marketing"
            className="hidden md:flex font-medium text-base text-slate-600  hover:text-black active:text-gray-800  transition-colors duration-200"
          >
            Email & Marketing
          </Link>
          <Link
            to="/export-service"
            className="hidden md:flex font-medium text-base text-slate-600  hover:text-black active:text-gray-800  transition-colors duration-200"
          >
            Export Service
          </Link>
          <Link
            to="/more"
            className="hidden md:flex font-medium text-base text-slate-600  hover:text-black active:text-gray-800  transition-colors duration-200"
          >
            More
          </Link>
        </div>

        <div className="flex justify-center items-center gap-6">
          <Link
            to="/help-center"
            className="hidden md:flex font-medium text-base text-slate-500  hover:text-black active:text-gray-800  transition-colors duration-200"
          >
            Help Center
          </Link>
          <Link
            to="/sign-in"
            className="hidden md:flex font-medium text-base text-slate-500 hover:text-black active:text-gray-800 transition-colors duration-200"
          >
            Sign-In
          </Link>
          <Link to="/cart" className="hidden md:flex">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 cursor-pointer"
              >
                <path d="M21 4H6.17l-.18-1.15A1 1 0 0 0 5 2H2v2h2.14l1.87 12.15A1 1 0 0 0 7 17h12v-2H7.86l-.31-2H19c.45 0 .84-.3.96-.73l2-7A1 1 0 0 0 21 3.99Zm-2.75 7H7.24l-.77-5h13.2l-1.43 5ZM8 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path>
              </svg>
            </button>
          </Link>
        </div>
      </nav>
  );
}
