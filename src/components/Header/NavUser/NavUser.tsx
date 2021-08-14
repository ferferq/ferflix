import Link from 'next/link';
import { HiSearch } from 'react-icons/hi';
import { IoNotifications } from 'react-icons/io5';
import { MdArrowDropDown } from 'react-icons/md';
import { Button } from '../../Button';

import { NavUserStyled } from './NavUser.module';

export function NavigationUser() {
  return (
    <NavUserStyled>
      <Button>
        <HiSearch color="white" size="18px"/>
      </Button>
      <Button>
        <Link href="/">
          INFANTIL
        </Link>
      </Button>
      <Button><IoNotifications color="white" size="20px" /></Button>
      <Button>
        <img src="/images/user1.png" alt="Usuário" style={{ marginRight: '0.6rem' }} />
        <MdArrowDropDown color="white" />
      </Button>
    </NavUserStyled>
  )
}