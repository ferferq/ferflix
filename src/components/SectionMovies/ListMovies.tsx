import React, { FormEvent, Fragment, useEffect, useRef, useState } from "react";
import { SyntheticEvent } from "react";
import { useModalMovieInfo } from "../../hooks/useModalMovieInfo";
import { useMovieInfo } from "../../hooks/useMovieInfo";
import { ModalInfoMovie } from "../ModalInfoMovie";
import { Img, Container } from "./ListMovies.module";

type itemProps = {
  id: number,
  name: string,
  overview: string,
  backdrop_path: string,
  poster_path: string,
  release_date: string,
  video: boolean,
  vote_average: number,
  title: string,
}

interface ListMoviesProps {
  listMovie: itemProps[];
}

export function ListMovies({ listMovie }: ListMoviesProps) {
  const {selectedItem} = useMovieInfo();
  const {modalMovieInfoOpen} = useModalMovieInfo();

 // const [infoMovies, setInfoMovie] = useState(0);
  function mouseOver(item: itemProps, e: SyntheticEvent) {
    const {x, y, width, height} = e.currentTarget.getBoundingClientRect();
    const positionX = x - (width / 2);
    const positionY = y - (height / 2);
    selectedItem(item, positionX, positionY);
    modalMovieInfoOpen();
  }

  return (
    <Container>
      {
        listMovie.map(itemX => {
          return (
            itemX.backdrop_path &&
            <div key={itemX.id}>
              <Img
              onMouseOver={(e: SyntheticEvent) => mouseOver(itemX, e)} 
              src={itemX.backdrop_path ? `https://image.tmdb.org/t/p/original/${itemX.backdrop_path}` : `images/o-informante.jpg`} 
              alt={itemX.name ? itemX.name : itemX.title} 
              />
              {/* 
                infoMovies === item.id &&
                <ModalInfoMovie fCloseModall={mouseOverOut}  item={item}/>
             */}
            </div>
          )
        })
      }
    </Container>
  );
}