import { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";
import { ButtonStyledComponent } from "./Button.Module";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonWatch?: boolean;
  buttonInfo?: boolean;
  children: ReactNode;
}

export function Button ({children,  ...rest}: ButtonProps) {
  return (
    <ButtonStyledComponent {...rest}>
      {children}
    </ButtonStyledComponent>
  );
}