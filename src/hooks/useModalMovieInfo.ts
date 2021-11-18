import { useContext } from 'react';
import { ModalMovieInfoContext } from '../context/ModalMovieInfo';

export function useModalMovieInfo () {
  const value = useContext(ModalMovieInfoContext);

  return value;
}