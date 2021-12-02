import React, { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import PageLayout from '../components/PageLayout';

interface PageRouteProps {
  title: String;
  routeParams: RouteProps;
}

const PageRoute: FC<PageRouteProps> = ({ title, routeParams, children }) => {
  return (
    <PageLayout title={title}>
      <Route {...routeParams}>{children}</Route>
    </PageLayout>
  );
};

export default PageRoute;
