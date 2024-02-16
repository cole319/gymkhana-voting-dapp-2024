export default function Input({ type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      className="border-2 border-neutral-800 w-full py-2 px-4 placeholder-slate-800"
      placeholder={placeholder}
    />
  );
}
