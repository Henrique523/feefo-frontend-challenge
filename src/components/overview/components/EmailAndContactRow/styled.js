import styled from 'styled-components';

export const StyledEmailAndContactRow = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 658px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
