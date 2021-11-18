import { useContext } from 'react';
import { SelectedMovieInfoContext } from '../context/SelectedMovieInfo';

export function useMovieInfo () {
  const value = useContext(SelectedMovieInfoContext);

  return value;
}