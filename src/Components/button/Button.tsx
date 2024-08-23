import { ComponentProps } from "react";

type Tvariant = "primary" | "secondary" | "danger" | "warning" | "success";
type TButton = ComponentProps<"button"> & {
  variant: Tvariant;
};

function Button({ children, variant, ...rest }: TButton) {
  console.log(checkvariant(variant));

  return (
    <button
      {...rest}
      style={{
        borderRadius: "6px",
        padding: "4px 6px",
        ...checkvariant(variant),
      }}
    >
      {children}
    </button>
  );
}
export default Button;

function checkvariant(variant: Tvariant) {
  if (variant === "primary") {
    return { backgroundColor: "#008BFF", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "black" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "black" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "black" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "black" };
  }
}
