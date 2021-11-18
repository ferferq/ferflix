import { useMovieInfo } from "../../hooks/useMovieInfo";
import { Img, InfoMovie, Modal } from "./ModalInfoMovie.module";

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
  fCloseModal: () => void;
  item: itemProps;
}

export function ModalInfoMovie({ item, fCloseModal }: ModalInfoMovieProps) {
  const {position} = useMovieInfo();

  function hundleOnMouseOut(e: MouseEvent) {
    if (e.target === e.currentTarget)
    fCloseModal();
    else
    return;
  }

  return (
  <Modal onMouseOver={(e: MouseEvent) => hundleOnMouseOut(e)}>
    <InfoMovie positionY={position.positionHeight} positionX={position.positionWidth}>
      <Img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.name} />
      <p>{item.name ? item.name : item.title}</p>
      <p>{item.vote_average} relevante</p>
    </InfoMovie>
  </Modal>
  );
}