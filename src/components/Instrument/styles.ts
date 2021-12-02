import styled from 'styled-components';

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.05);
  color: #fafafa;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s background-color, 0.5s border;

  padding: 8px 16px;
  margin: 36px 0px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.09);
    border: 1px solid rgba(255, 255, 255, 0.11);
  }
`;

export const InstrumentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
