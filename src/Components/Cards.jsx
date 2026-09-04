export default function Cards({ title, stats, details }) {
  return (
    <div className="border border-slate-300 bg-white px-6 py-10 rounded-lg shadow-lg">
      <h1 className="font-bold text-xl mb-4 font-poppins tracking-tight">
        {title}
      </h1>
      <hr className="text-slate-400 my-6" />
      <p className="font-mono font-semibold text-lg mb-4">{stats}</p>
      <p className="font-normal text-base">{details}</p>
    </div>
  );
}
