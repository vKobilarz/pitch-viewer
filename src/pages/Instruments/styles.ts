import styled from 'styled-components';

export const InstrumentButton = styled.button`
  width: 240px;

  padding: 16px;
  margin: 8px;

  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: 0.2s background-color, 0.5s border;

  &:hover {
    background-color: rgba(255, 255, 255, 0.09);
    border: 1px solid rgba(255, 255, 255, 0.11);
  }
`;

export const InstrumentTitle = styled.h4`
  color: #fafafa;
  font-size: 24px;
  margin: 16px 0px 0px 0px;
`;
