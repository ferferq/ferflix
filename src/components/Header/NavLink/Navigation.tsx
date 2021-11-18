import React from "react";
import { Flex } from "../../Flex";
import { NavigationStyled } from "./Navigation.module";
import { NavLink } from "./Navlink";

const links = [
  {
    link: '/browse',
    title: "Início",
  },
  {
    link: '/browse/series',
    title: "Séries",
  },
  {
    link: '/browse/movies',
    title: "Filmes",
  },
  {
    link: '/browse/top',
    title: "Bombando",
  },
  {
    link: '/browse/favorites',
    title: "Minha lista",
  },
  {
    link: '/browse/again',
    title: "Reveja",
  },
];

export function Navigation() {
  return (
    <NavigationStyled>
      <Flex>
        {
          links.map(link => <NavLink key={link.title} href={link.link}>{link.title}</NavLink>)
        }
      </Flex>
    </NavigationStyled>
  )
}