import { Link } from "react-router-dom";

export default function POS({ title, description, price }) {
  return (
    <div className="border border-slate-300 bg-white px-6 py-12 rounded-lg shadow-lg">
      <h3 className="font-bold text-lg mb-6 font-poppins tracking-tight">
        {title}
      </h3>
      <p className="font-poppins mb-8 font-normal">{description}</p>
      <button>
        <Link to="/more" className="font-semibold font-poppins text-center text-base border bg-black px-10 py-3 rounded-md cursor-pointer hover:bg-slate-700 active:bg-slate-800 w-1/2 text-white">
          {price}
        </Link>
      </button>
    </div>
  );
}
