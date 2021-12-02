import styled, { css } from 'styled-components';

interface NoteContainerParams {
  isActive: boolean;
}

export const NoteContainer = styled.div<NoteContainerParams>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  background-color: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;

  margin: 4px 0px;

  ${(params) =>
    params.isActive &&
    css`
      background-color: #80ffdb;
      color: #202020;
    `}

  & + div {
    margin-left: 7px;
  }
`;
