import { Flex } from "../Flex";
import { CartUserStyled } from './CartUser.module'
import Link from 'next/link';

interface CartUser {
  imageUrl: string;
  name: string;
}

export function CartUser({imageUrl, name} : CartUser) {
  return (
    <CartUserStyled>
      <Link href="/browse">
        <a>
          <Flex direction="column" gap="0.1rem">
            <img src={imageUrl} alt={name} />
            <strong>{name}</strong>
          </Flex>
        </a>
      </Link>
    </CartUserStyled>
  );
}