import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const InstrumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InstrumentsList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InstrumentButton = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 240px;

  padding: 16px;
  margin: 8px;

  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: 0.2s background-color, 0.5s border;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.09);
    border: 1px solid rgba(255, 255, 255, 0.11);
  }
`;

export const InstrumentTitle = styled.h4`
  color: #fafafa;
  font-size: 24px;
  margin: 16px 0px 8px 0px;
`;
