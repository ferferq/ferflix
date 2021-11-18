import styled from 'styled-components';

export const CartUserStyled = styled.div`
  a{
    text-decoration:none;
  }
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 0.4rem;
    transition: border 0.2s;
    border: 3px solid transparent;
  }
  strong{
    color: var(--text-body);
    line-height: 1.2em;
    min-height: 1.8em;
    display: block;
    text-align: center;
    font-size: 1.3vw;
    font-weight: 400;
    margin: .6em 0;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    transition: color 0.2s;
  }

  a:hover img{
    border: 3px solid #FFF;
  }
  a:hover strong{
    color: #fff;
  }
`