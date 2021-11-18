import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MainScreen } from "../../components/MainScreen";
import { ModalInfoMovie } from "../../components/ModalInfoMovie";
import { SectionMovies } from "../../components/SectionMovies";
import { useModalMovieInfo } from "../../hooks/useModalMovieInfo";
import { useMovieInfo } from "../../hooks/useMovieInfo";
import { api } from "../../services/api";
import { BrowseStyled } from "./Browse.module";

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

interface listProps {
      slug: string,
      title: string,
      items: {
        page: number,
        results: itemProps[],
      },
}

export default function Browse() {
  const [list, setList] = useState<listProps[]>([] as listProps[]);
  const [mainScreenItem, setMainScreenItem] = useState<itemProps>({} as itemProps);
  const {isOpenModalInfo, modalMovieInfoClose, modalMovieInfoOpen} = useModalMovieInfo();
  const {item} = useMovieInfo();

  useEffect(() => {
    async function getMovies() {
      const listresponse  = await api.get<listProps[]>("/api/movies");
      console.log(listresponse.data)
      setList(listresponse.data);
      let originals = listresponse.data.filter(i=>i.slug ==='originals');
      let radomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[radomChosen];
      const overviewPrev = chosen.overview.length > 150 ? chosen.overview.substring(0,200)+'...' : chosen.overview;
      setMainScreenItem({
        ...chosen,
        overview: overviewPrev,
      });
    }
    getMovies();
  }, []);



  return (
  <>
    <BrowseStyled>
      <Header/>
      {mainScreenItem.id && <MainScreen item={mainScreenItem}/>}
      {list && <SectionMovies list={list}/>}
      {
      isOpenModalInfo &&
      <ModalInfoMovie item={item} fCloseModal={modalMovieInfoClose} />
      }
    </BrowseStyled>
  </>
  )
}