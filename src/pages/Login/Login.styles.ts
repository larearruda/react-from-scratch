import styled from 'styled-components';

export const Container = styled.div`
  min-height: 80vh; /* viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media (min-width: 768px) {
    .container {
      align-items: center;
    }
  }
`;

