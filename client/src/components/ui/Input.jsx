
export default function Input({ type, name, placeholder, value, onChange }) {
    return (
        <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}

            className="border-2 border-slate-100 py-2.5 px-3 text-[.95em] outline-transparent rounded-lg focus:border-slate-300 transition-all duration-300"
        />
    )
}
