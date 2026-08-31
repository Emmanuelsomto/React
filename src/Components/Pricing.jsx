export default function Pricing({title, price, description}) {
  return (
    <div className="border border-slate-300 bg-white px-8 py-12 shadow-lg rounded-lg">
      <h3 className="font-poppins text-lg md:text-xl font-bold mb-6">{title}</h3>
      <hr className="text-slate-400 my-8"/>
      <p className="text-base font-medium mb-6">{price}</p>
      <p className="font-normal text-base text-gray-700 tracking-tight">{description}</p>
    </div>
  )
}