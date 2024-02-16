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
      className={`${customWidth} ${bgColor} ${textColor} ${borderColor}  cursor-pointer font-semibold 
        rounded-md border-2 hover:${hoverTextColor} hover:${hoverBgColor} ${
        paddingX ? paddingX : "px-3"
      } ${paddingY ? paddingY : "py-1"}`}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}
