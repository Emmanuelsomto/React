export default function Help({ title, icon: Icon, count, desc }) {
  return (
    <div className="border border-slate-300 bg-white px-6 py-10 rounded-lg shadow-lg">
      <section className="flex flex-col gap-6">
        <span className="text-2xl">{Icon && <Icon />}</span>
        <h3 className="font-poppins text-xl mb-6 font-bold">{title}</h3>
      </section>
      <p>{count}</p>
      <p>{desc}</p>
    </div>
  );
}
