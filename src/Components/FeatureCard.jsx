export default function FeatureCard({icon: Icon, title, description}) {
  return (
    <div className="border px-8 py-12 rounded-md border-slate-300 bg-white shadow-lg">
      <div className="w-12 h-12">{Icon && <Icon />}</div>
      <hr className="mb-6 text-slate-400" />
      <h3 className="text-xl font-bold mb-6 font-poppins">{title}</h3>
      <p className="text-base font-medium text-gray-700">{description}</p>
    </div>
  );
}