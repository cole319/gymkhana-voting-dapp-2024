export default function Input({ type, name }) {
  return (
    <input
      type={type}
      name={name}
      className="border-2 border-neutral-600 rounded-sm w-full"
    />
  );
}
