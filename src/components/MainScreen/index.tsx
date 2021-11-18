import { Button } from "../Button";
import { MainScreenStyled, EffectVertical, EffectHorizontal, Content } from "./MainScreen.module";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { GrPlayFill } from 'react-icons/gr';
import { Flex } from "../Flex";


interface MainScreenProps {
  item: {
    id: number,
    name: string,
    overview: string,
    backdrop_path: string,
    poster_path: string,
    release_date: string,
    video: boolean,
    vote_average: number,
  }
}
export function MainScreen({ item }: MainScreenProps) {
  console.log(item.name);
  return (
    <MainScreenStyled backgroundImage={item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : '/images/o-informante.jpg'}>
      <EffectVertical>
        <EffectHorizontal>
            <Content>
              <h1>{item.name}</h1>
              <p>{item.overview}</p>
              <Flex justifyContent='left' gap="15px">
                <Button
                  buttonWatch
                >
                  <Flex gap="0.86rem">
                    <GrPlayFill color="white" size="20px" />
                    Assistir
                  </Flex>
                </Button>
                <Button
                  buttonInfo
                >
                  <Flex gap="0.86rem">
                    <AiOutlineInfoCircle color="white" size="20px" />
                    Mais information
                  </Flex>
                </Button>
              </Flex>
            </Content>
        </EffectHorizontal>
      </EffectVertical>
    </MainScreenStyled>
  );
}