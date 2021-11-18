import styled from 'styled-components';

interface HeaderStyledProps {
  isBlack: boolean;
}

export const HeaderStyled = styled.div<HeaderStyledProps>`
  position: fixed;
  width: 100vw;
  margin: 0 auto;
  padding: 0 3.66rem;
  background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
  ${props => props.isBlack ? 'transaction: background-color 0.4s' : ''};
  background-color: ${props => props.isBlack ? 'var(--background)' : 'rgba(0, 0, 0, 0)'};

  img {
    max-width: 6rem;
    max-height: 2rem;
  }
`

export const Content = styled.div`
  height: 4.25rem;
  display: flex;
  align-items: center;
`