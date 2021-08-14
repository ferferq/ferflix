import { MainScreenStyled,EffectVertical, EffectHorizontal } from "./MainScreen.module";

interface MainScreenProps {
  item: {
    urlImg: string;
  }
}
export function MainScreen({item} : MainScreenProps) {
  console.log(item.urlImg);
  return (
    <MainScreenStyled backgroundImage={item.urlImg}>
      <EffectVertical>
        <EffectHorizontal>

        </EffectHorizontal>
      </EffectVertical>
    </MainScreenStyled>
  );
}