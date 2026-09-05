import { useState } from "react";
import { motion } from "motion/react";

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="mt-34">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center mx-6 mb-32">
          <div className="flex flex-col w-full h-full">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center text-xl md:text-3xl font-black font-poppins mb-8"
            >
              {isSignUp ? "Sign-Up" : "Log-In"}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              className="flex flex-col gap-8 w-full border border-b border-slate-300 px-6 py-8 rounded-md shadow-lg mx-auto w-full md:w-1/2"
            >
              <form action="submit" autoComplete="on" className="flex flex-col">
                <label
                  htmlFor="username"
                  className="font-semibold font-poppins text-sm md:text-base mb-4"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="username"
                  placeholder="John Doe"
                  required
                  minLength={3}
                  maxLength={34}
                  value={formData.username}
                  onChange={handleChange}
                  className="border font-poppins w-full h-full pr-12 pl-4 py-3 mb-6 rounded-md focus:outline-black bg-slate-50"
                />
                <label
                  htmlFor="email"
                  className="font-semibold font-poppins text-sm md:text-base mb-4"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="johndoe@gmail.com"
                  required
                  minLength={3}
                  maxLength={34}
                  value={formData.email}
                  onChange={handleChange}
                  className="border font-poppins w-full h-full pr-12 pl-4 py-3 mb-6 rounded-md focus:outline-black bg-slate-50"
                />
                <label
                  htmlFor="password"
                  className="font-semibold font-poppins text-sm md:text-base mb-4"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="******"
                  required
                  minLength={3}
                  maxLength={34}
                  value={formData.password}
                  onChange={handleChange}
                  className="border font-poppins w-full h-full pr-12 pl-4 py-3 mb-8 rounded-md focus:outline-black bg-slate-50"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSignUp(!isSignUp);
                  }}
                  className="border bg-black text-white text-lg font-poppins font-semibold px-2 py-3 w-full h-full cursor-pointer hover:bg-slate-700 transition-colors ease-in duration-300 rounded-lg"
                >
                  {isSignUp ? "Sign-In" : "Log-In"}
                </button>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSignUp(!isSignUp);
                  }}
                  className="mt-6 font-poppins text-sm md:text-base font-normal hover:underline hover:text-slate-600 active:underline"
                >
                  {isSignUp
                    ? "Already have an account? Log-In"
                    : "Don't have an account? Sign-In"}
                </a>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
