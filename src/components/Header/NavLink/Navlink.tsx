import { ActiveLink } from '../../ActiveLink';

interface NavLinkProps {
  children: string;
  href: string;
}

export function NavLink ({
  children, href,
}: NavLinkProps) {
  return (
    <ActiveLink shouldMatchExactHref={true} href={href} passHref>
        <p>{children}</p>
    </ActiveLink>
  )
}