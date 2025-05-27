const BackButton = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors ${className}`}
      aria-label="Go back"
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 7L4 12M4 12L9 17M4 12H20" />
      </svg>
    </button>
  );
};

export default BackButton;
