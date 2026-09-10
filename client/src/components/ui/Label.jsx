export default function Label({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor} className="font-medium text-[.95em]">
      {text}
    </label>
  );
}
