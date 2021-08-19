import { ListMovies } from "./ListMovies";
import { Container, MovieRowList, Section, Arrow, DivOver, Space } from "./SectionMovies.module";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState } from "react";

type itemProps = {
  id: number,
  name: string,
  overview: string,
  backdrop_path: string,
  poster_path: string,
  release_date: string,
  video: boolean,
  vote_average: number,
  title: string;
}

interface listProps {
  slug: string,
  title: string,
  items: {
    page: number,
    results: itemProps[],
  },
}

interface SectionMoviesProps {
  list: listProps[];
}

export function SectionMovies({ list }: SectionMoviesProps) {
  const [scrollX, setScrollX] = useState(0);
  const [slugCorrent, setSlugCorrent] = useState(''); 

  function handleonHover(id: string) {
    setSlugCorrent(id);
  }

  function handleonHoverOut() {
    setSlugCorrent('');
    setScrollX(0);
  }

  const handleLeftArrow = () => {
    let x =0;
    if (window.innerWidth < 760) {x = scrollX + Math.round(window.innerWidth / 3);}
    else {x = scrollX + Math.round(window.innerWidth / 2);}
    if (x > 0) { 
        x=0;
    }
    setScrollX(x);
}
const handleRightArrow = (results: itemProps[]) => {
    let x =0;
    if (window.innerWidth < 760) {x = scrollX - Math.round(window.innerWidth / 3);}
    else {x = scrollX - Math.round(window.innerWidth / 2);}
    let listW = results.length * 234;
    if ((window.innerWidth - listW) > x){
        x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
}

  return (
    <Section>
      {
        list.map(item => {
          return (
            <>
            <Container key={item.slug} onMouseOver={() => handleonHover(item.slug)}
            onMouseLeave={() => handleonHoverOut()}
            >
              <Arrow bOpacity={slugCorrent === item.slug && scrollX !== 0 ? true : false} onClick={() => handleLeftArrow()}><IoIosArrowBack color="white" size="40px" /></Arrow>
              <Arrow bOpacity={slugCorrent === item.slug && true}onClick={() => handleRightArrow(item.items.results)} bRight><IoIosArrowForward color="white" size="40px" /></Arrow>
              <DivOver>
                  <h1>{item.title}</h1>
                  <MovieRowList iPositionX={slugCorrent === item.slug && scrollX}>
                    <ListMovies listMovie={item.items.results} />
                  </MovieRowList>
              </DivOver>
            </Container>
            <Space></Space>
            </>
          )
        })
      }
    </Section>
  );
}


