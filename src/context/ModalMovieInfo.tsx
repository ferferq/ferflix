import { createContext, ReactNode, useCallback, useState } from "react";

type ModalMovieInfoContextProps = {
  isOpenModalInfo: boolean;
  modalMovieInfoOpen: () => void;
  modalMovieInfoClose: () => void;
}

type ModalMovieInfoProviderProps = {
  children: ReactNode;
}

export const ModalMovieInfoContext = createContext({} as ModalMovieInfoContextProps);

export function ModalMovieInfoProvider(props: ModalMovieInfoProviderProps){
  const [isOpenModalInfo, setOpenModalInfo] = useState(false);

  const modalMovieInfoOpen = useCallback(() => {
    setOpenModalInfo(true);
  }, []);

  const modalMovieInfoClose = useCallback(() => {
    setOpenModalInfo(false);
  }, []);

  return (
    <ModalMovieInfoContext.Provider value={{isOpenModalInfo, modalMovieInfoOpen, modalMovieInfoClose}}>
      {props.children}
    </ModalMovieInfoContext.Provider> 
  )
}