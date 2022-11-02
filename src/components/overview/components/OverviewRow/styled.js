import styled from 'styled-components';

export const StyledOverviewRowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  width: 100%;
  max-width: 40%;
  
  padding-top: 40px;
  
  @media (min-width: 1264px) and (max-width: 1904px) {
    max-width: 50%;
  }
  
  @media (min-width: 960px) and (max-width: 1263px) {
    max-width: 60%;
  }
  
  @media (min-width: 659px) and (max-width: 959px) {
    max-width: 85%;
  }
  
  @media (max-width: 658px) {
    max-width: 95%;
    
    flex-direction: column;
    justify-content: center;
  }
`;
