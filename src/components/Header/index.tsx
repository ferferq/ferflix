import { useEffect, useState } from 'react';
import {HeaderStyled, Content} from './Header.module';
import { Navigation } from './NavLink/Navigation';
import { NavigationUser } from './NavUser/NavUser';

interface HeaderProps {
  homePage?: boolean;
}

export function Header ({homePage = false} : HeaderProps) {
  const [isBlack, setBlack] = useState(false);

  useEffect(() => {
    function onScroll() {
      if(window.scrollY > 0) {
        setBlack(true);
      }
      else {
        setBlack(false);
      }
    }
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <HeaderStyled isBlack={isBlack}>
      <Content>
      <img src="/images/FERFLIX.png" alt="Logo" />
      {
        homePage === false && (
          <>
            <Navigation />
            <NavigationUser />
          </>
        )
      }
      </Content>
    </HeaderStyled>
  )
}