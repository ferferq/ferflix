import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index:996;
  div {
    width: 230px;
    margin: 0 2px;
  }
  //transform: translateY(0);
  transition: all ease 0.4s;
`

export const Img = styled.img`
  width: inherit;
  border-radius: 4px;
  cursor: pointer;
`