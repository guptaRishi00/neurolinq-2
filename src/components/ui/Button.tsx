import Link from "next/link";
import React, { ComponentProps } from "react";

type ButtonColor = "yellow" | "white" | "green";

type NextLinkProps = ComponentProps<typeof Link>;

interface ButtonProps extends NextLinkProps {
  color: ButtonColor;
}

const colorMap: Record<ButtonColor, string> = {
  yellow: "bg-[#D4AF84] text-white",
  white: "bg-white text-[#6E7D66] ",
  green: "bg-[#6E7D66] text-white",
};

const Button: React.FC<ButtonProps> = ({
  color,
  children, // Now valid!
  className, // Now valid!
  href,
  ...rest
}) => {
  const baseStyles = "px-5 py-3 rounded-xl cursor-pointer";

  const colorStyles = colorMap[color];

  const combinedStyles = `${baseStyles} ${colorStyles} ${className || ""}`;

  return (
    <Link href={href} className={combinedStyles} {...rest}>
      {children}
    </Link>
  );
};

export default Button;
