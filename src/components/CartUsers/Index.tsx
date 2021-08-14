import { CartUser } from "../CartUser/Index";
import { Flex } from "../Flex";
import { CartUsersComponent } from "./CartUsers.module";

const users = [
  {
    name: 'Fernando',
    imageUrl: 'images/user1.png',
  },
  {
    name: 'Beatriz',
    imageUrl: 'images/user2.png',
  },
  {
    name: 'Arlete',
    imageUrl: 'images/user3.png',
  },
  {
    name: 'Vic',
    imageUrl: 'images/user4.png',
  },
  {
    name: 'Jhow',
    imageUrl: 'images/user5.png',
  },
];

export function CartUsers () {
  return (
    <CartUsersComponent>
      <Flex gap="1.37rem">
        {
          users.map(user => {
            return <CartUser key={user.name} imageUrl={user.imageUrl} name={user.name} />
          })
        }
      </Flex>
      <button>Gerenciar Perfis</button>
    </CartUsersComponent>
  )
}