import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { ActiveLinkStyled } from "./ActiveLink.module";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children, shouldMatchExactHref=false , ...rest 
} : ActiveLinkProps) {
  let isActive = false;
  const { asPath } = useRouter();

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }
  else if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href))) || (asPath.startsWith(String(rest.as)))) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      <ActiveLinkStyled isActive={isActive} disabled={isActive}>
        {children}
      </ActiveLinkStyled>
    </Link>
  )
}