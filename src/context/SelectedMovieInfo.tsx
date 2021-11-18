import { createContext, ReactNode, useCallback, useState } from "react";

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

type SelectedGenreConfigContext = {
  item: itemProps;
  selectedItem: (item:itemProps, positionWidth: number, positionHeight: number) => void;
  position: positionProps;
}

type SelectedMovieInfoProviderProps = {
  children: ReactNode;
}

type positionProps = {
  positionWidth: number;
  positionHeight: number;
}

export const SelectedMovieInfoContext = createContext({} as SelectedGenreConfigContext);

export function SelectedMovieInfoProvider(props: SelectedMovieInfoProviderProps){
  const [item, setItem] = useState<itemProps>({} as itemProps);
  const [position, setPosition] = useState<positionProps>({} as positionProps);

  const selectedItem = useCallback((data : itemProps, positionWidth: number, positionHeight: number) => {
    setItem(data);
    setPosition({
      positionWidth, 
      positionHeight
    });
  }, []);

  return (
    <SelectedMovieInfoContext.Provider value={{item, selectedItem, position}}>
      {props.children}
    </SelectedMovieInfoContext.Provider> 
  )
}