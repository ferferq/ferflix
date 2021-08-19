import { Img, InfoMovie } from "./ModalInfoMovie.module";

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

interface ModalInfoMovieProps {
  fCloseModall: () => void;
  item: itemProps;
}

export function ModalInfoMovie({ item, fCloseModall }: ModalInfoMovieProps) {
  return (
    <InfoMovie onMouseOut={fCloseModall}>
      <Img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.name} />
      <p>{item.name ? item.name : item.title}</p>
      <p>{item.vote_average} relevante</p>
    </InfoMovie>
  );
}