import styled from 'styled-components';

export const Container = styled.div`
  z-index:999;
`

export const Space = styled.div`
  margin-bottom: 40px;
`

export const Section= styled.div`
  margin-top: -85px;
  margin-bottom: 100px;
  z-index:1000;
`

export const DivOver = styled.div`
  padding: 0 4%;
  z-index:998;
`

interface ArrowProps {
  bRight: boolean;
  bOpacity: boolean;
}

export const Arrow = styled.button<ArrowProps>`
    position: absolute;
    width: 40px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    opacity: 100;
    transition: 0.1s;
    border: 0;
    opacity: 0;
    ${props => props.bRight && `right: 0;`}
    ${props => props.bOpacity && `opacity: 1;`}
`

interface MovieRowListProps {
  iPositionX: number;
}

export const MovieRowList = styled.div<MovieRowListProps>`
  margin-left: ${props => props.iPositionX ? props.iPositionX+'px' : ''};
  transition: all ease 0.5s;
  z-index: 997;
`
