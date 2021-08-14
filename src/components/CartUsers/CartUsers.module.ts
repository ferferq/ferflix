import styled from 'styled-components';

export const CartUsersComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    display: block;
    margin: 2em 0 1em 0;
    font-size: 1.2vw;
    border: 1px solid grey;
    color: grey;
    text-transform: uppercase;
    padding: .5em 1.5em;
    letter-spacing: 2px;
    cursor: pointer;
    background-color: transparent;
    transition: color 0.2s;
    transition: border 0.2s;
  }


  button:hover {
    border: 1px solid #fff;
    color: #fff;
  }
`