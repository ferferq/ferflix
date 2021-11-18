import styled from 'styled-components';
import { darken, transparentize } from 'polished';

interface ButtonStyledProps {
  buttonWatch: boolean;
  buttonInfo: boolean;
}

export const ButtonStyledComponent = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.buttonWatch && `
        padding: 0.55rem 1.65rem 0.55rem 1.3rem;
        background-color: #fff;
        font-weight: 700;
        color: black;
        margin-right: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-radius: 4px;
        justify-content: center;
        opacity: 1;

        &:hover{
          background-color: ${darken(0.2, '#FFF')};
        }
      `
  }

${props => props.buttonInfo && `
        padding: 0.55rem 1.65rem 0.55rem 1.3rem;
        background-color: ${transparentize(0.2, '#6d6d6e')};
        color: white;
        margin-right: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-radius: 4px;
        justify-content: center;
        opacity: 1;

        &:hover{
          background-color: ${transparentize(0.6, '#6d6d6e')};
        }
      `
  }
`