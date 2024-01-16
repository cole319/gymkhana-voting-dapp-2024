export default function Button({ buttonContent, onClick, customWidth }) {
  return (
    <div>
      <button
        className={`${customWidth} cursor-pointer bg-slate-50 text-neutral-800 font-semibold px-3 py-1 
        rounded-md border-2 border-slate-50 hover:bg-transparent hover:text-neutral-50`}
        onClick={onClick}
      >
        {buttonContent}
      </button>
    </div>
  );
}
