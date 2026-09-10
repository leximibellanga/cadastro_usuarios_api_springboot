export default function Input({ type, name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full pl-4 pr-4 py-2.5 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg text-sm outline-transparent focus:outline-none focus:ring-3 focus:ring-slate-200 focus:border-slate-300 transition-all duration-300"
    />
  );
}
