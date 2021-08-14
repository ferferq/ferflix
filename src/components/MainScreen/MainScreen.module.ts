import styled from 'styled-components';

interface MainScreenStyledProps {
  backgroundImage: string;
}

export const MainScreenStyled = styled.section<MainScreenStyledProps>`
  background-size: cover;
  background-position: 'center';
  background-image: url(${props => props.backgroundImage ? props.backgroundImage : ''});
  width: 100%;
  height: 90vh;
`

export const EffectVertical = styled.div`
width: inherit;
height: inherit;
//background: linear-gradient(to top, #111 5%, transparent 95%);
`

export const EffectHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 5%, transparent 95%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
`