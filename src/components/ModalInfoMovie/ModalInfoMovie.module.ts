import styled from 'styled-components';

export const Modal = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 95vw;
  height: 100vh;
  z-index: 50;
`

interface InfoMovieProps {
  positionX: number;
  positionY: number;
}

export const InfoMovie = styled.div<InfoMovieProps>`
      position: absolute;
      width: 400px;
      top: ${props => props.positionY ? `${props.positionY}px` : 0};
      left: ${props => props.positionX ? `${props.positionX}px` : 0};
      //transform: scale(1.4);
      color: white;
      background: #181818;
      z-index: 10;
      border-radius: 4px;

      p{
        padding: 0 2%;
        font-size: 0.7rem;
      }
      transition-delay: 5s;
`
export const Img = styled.img`
  width: inherit;
  cursor: pointer;
  z-index: 9;
  border-radius: 4px;
`