import { ReactNode } from "react";
import { FlexStyle } from "./Flex.module";

interface FlexProps {
  children: ReactNode;
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
}

export function Flex ({children, ...props} : FlexProps) {
  return (
    <FlexStyle {...props}>{children}</FlexStyle>
  )
}