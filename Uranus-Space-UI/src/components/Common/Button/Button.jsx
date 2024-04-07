function Button({
    style,
    rightIcon,
    leftIcon,
    onClick,
    children,
    width,
    type = "button",
  }) {
    const getButtonStyle = () => {
      switch (style) {
        case "primary":
          return "h-[3.25rem] bg-gradient02 text-textW";
        case "secondary":
          return "h-[3.75rem]  bg-callAcction text-textW";
        default:
          return "";
      }
    };
  
    const buttonStyle = {
      width: width || "auto",
    };
  
    return (
      <button
        type={type} 
        className={`text-nowrap cursor-pointer inline-flex justify-center py-0 px-[3.125rem] items-center gap-3 flex-shrink-0 rounded-[1.25rem]  ${getButtonStyle()}`}
        style={buttonStyle}
        onClick={onClick}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        <span className="flex justify-center items-center gap-3">{children}</span>
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
  
  export default Button;