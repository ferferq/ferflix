import { Header } from "../../components/Header";
import { MainScreen } from "../../components/MainScreen";
import { BrowseStyled } from "./Browse.module";

export default function Browse() {

  return (
    <BrowseStyled>
      <Header/>
      <MainScreen item={{urlImg: '/images/o-informante.jpg'}} />
    </BrowseStyled>
  )
}