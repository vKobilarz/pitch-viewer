import styled from 'styled-components';

export const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;

  & + div {
    margin-top: 8px;
  }
`;
