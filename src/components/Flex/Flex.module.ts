import styled from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'column';
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
}

export const FlexStyle = styled.div<FlexProps>`
  display: flex;
  flex-direction:${props => props.direction ? props.direction : 'row'};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
  gap: ${props => props.gap ? props.gap : ''};
`