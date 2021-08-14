import styled from 'styled-components';

export const NavUserStyled = styled.div`
  margin-left: auto;
  display:flex;
  align-items: center;
  justify-content: center;

  button {
    border:0;
    background-color: transparent;

    a{
      text-decoration: none;
      font-size: 0.75rem;
      color: white;
    }

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 0.1rem;
    }

    & + button {
      margin-left: 20px;
    }
  }

`