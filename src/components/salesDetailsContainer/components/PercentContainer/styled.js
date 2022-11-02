import styled, { css } from 'styled-components';

export const StyledPercentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  width: 50%;
  
  padding: 12px 16px;
  
  ${props => props.isLeftColumn && css`
    border-right: 1px solid #DADADA;
    padding-left: 12px;
  `}
`;
