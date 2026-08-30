import { Link } from "react-router-dom";
import Cards from "../Components/Cards";
import POS from "../Components/POS";
import { motion } from "motion/react";

const card = [
  {
    id: 0,
    title: "In-Person Payments",
    stats: "2.3% +0¢",
    details:
      "Per transaction for swipe, chip, or contactless payments. And many more.",
  },

  {
    id: 1,
    title: "Online Store Checkout",
    stats: "2.7% +0¢",
    details:
      "Per transaction for online store transactions and checkout links.",
  },

  {
    id: 2,
    title: "Invoicing",
    stats: "2.8% +30¢",
    details: "Per transaction for key-in card payments and custom invoices.",
  },
];

const posTerminal = [
  {
    id: 0,
    title: "GoDaddy Card Reader",
    description:
      "Pairs with your smartphone via Bluetooth to process payments anywhere on the go.",
    price: "$49.00",
  },

  {
    id: 1,
    title: "Smart Terminal Flex",
    description:
      "Features a built-in barcode scanner, receipt printer, dual screen for tableside checkout.",
    price: "$299.00",
  },

  {
    id: 2,
    title: "Smart Terminal Duo",
    description:
      "Customer-facing display with custom branding, tip prompts, and instant receipts.",
    price: "$499.00",
  },
];

export default function Commerce() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center items-center mt-44 mx-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold md:font-extrabold tracking-tight font-poppins mb-12 text-center">
          Sell everywhere with lower fess
        </h1>
        <p className="text-base font-semibold tracking-tight mb-12 text-center">
          Accept payments in person, online, or on the go with zero hidden setup
          costs and industry-leading processing Rates.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="border bg-black px-8 py-4 rounded-md text-white fomt-semibold cursor-pointer hover:bg-slate-700 active:bg-slate-800 ease-in-out duration-300 transition-all">
            <Link to="/more">Explore POS Hardware</Link>
          </button>
          <Link to="/more" className="font-semibold text-base hover:underline">
            Compare Processing Rates
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-center items-center gap-8 my-24 mx-12"
      >
        {card.map((cards) => (
          <Cards
            key={cards.id}
            title={cards.title}
            stats={cards.stats}
            details={cards.details}
          />
        ))}
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-3xl font-bold font-poppins"
      >
        POS Terminal Grid
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-center items-center gap-8 mx-12 my-16 "
      >
        {posTerminal.map((pos) => (
          <POS
            key={pos.id}
            title={pos.title}
            description={pos.description}
            price={pos.price}
          />
        ))}
      </motion.div>
    </>
  );
}
