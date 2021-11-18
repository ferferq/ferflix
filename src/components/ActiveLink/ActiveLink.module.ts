import styled from 'styled-components';

interface ActiveLinkStyledProps {
  isActive?: boolean;
}

export const ActiveLinkStyled = styled.a<ActiveLinkStyledProps>`
  &[disabled] {
    cursor: default;
  }

  &+a{
    margin-left: 20px;
  }
  text-decoration:none;
  color: white;
  transition: filter 0.2s;
  
  filter: ${props => props.isActive === true ? 'brightness(1)' : 'brightness(0.6)'};

  &:hover {
    filter: brightness(0.9);
  }
`