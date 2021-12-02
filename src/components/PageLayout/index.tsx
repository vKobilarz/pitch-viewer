import React, { FC } from 'react';

import { Container, Content, Title } from './styles';

interface PageLayoutProps {
  title: String;
}

const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default PageLayout;
