import React, { FC } from 'react';

import { Container, Content } from './styles';

const PageLayout: FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default PageLayout;
