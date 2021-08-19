import styled from 'styled-components';

interface MainScreenStyledProps {
  backgroundImage: string;
}

export const MainScreenStyled = styled.section<MainScreenStyledProps>`
  background-size: cover;
  background-position: 'center';
  background-image: url(${props => props.backgroundImage ? props.backgroundImage : ''});
  width: 100%;
  height: 100vh;
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
    justify-content: flex-end;
    padding-left: 30px;
    padding-bottom: 150px;
`

export const Content = styled.div`
  color: var(--text-title);
  margin: 0 0 0 4%;
  max-width:36%;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

  > div {
    margin-top: 1.5vw;
  }

  h1{
    font-size: 3rem;
    font-weight: bold;
  }
`
