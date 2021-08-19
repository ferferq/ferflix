import React, { Fragment, useState } from "react";
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
  const [infoMovies, setInfoMovie] = useState(0);
  function mouseOver(id: number) {
    setInfoMovie(id);
  }
  function mouseOverOut() {
    setInfoMovie(0);
  }

  return (
    <Container>
      {
        listMovie.map(item => {
          return (
            item.poster_path ?
            <div key={item.id}>
              <Img onMouseOver={() => mouseOver(item.id)} src={item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : `images/o-informante.jpg`} alt={item.name} /> 
              {
                infoMovies === item.id &&
                <ModalInfoMovie fCloseModall={mouseOverOut}  item={item}/>
              }
            </div>
            : <Fragment key={item.id}></Fragment>
          )
        })
      }
    </Container>
  );
}