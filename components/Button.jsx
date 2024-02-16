export default function Button({
  buttonContent,
  customWidth,
  onClick,
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
  borderColor,
  paddingX,
  paddingY,
}) {
  return (
    <button
      className={`${customWidth} ${bgColor} ${textColor} ${borderColor} ${
        paddingX ? paddingX : "px-3"
      } ${paddingY ? paddingY : "py-1"} cursor-pointer font-semibold 
        rounded-md border-2 hover:${hoverBgColor} hover:${hoverTextColor}`}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}
