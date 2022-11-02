import styled from 'styled-components';

export const StyledSalesDetailsContainer = styled.div`
  background-color: white;
  box-shadow: -2px -2px 10px -6px rgba(0,0,0,0.75);
  border-radius: 4px;
  margin-top: 40px;
  margin-bottom: 40px;
  
  width: 40%;

  @media (min-width: 1264px) and (max-width: 1904px) {
    width: 50%;
  }

  @media (min-width: 960px) and (max-width: 1263px) {
    width: 60%;
  }

  @media (min-width: 659px) and (max-width: 959px) {
    width: 85%;
  }

  @media (max-width: 658px) {
    width: 95%;
  }
`;
