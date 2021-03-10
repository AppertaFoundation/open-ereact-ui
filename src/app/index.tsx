/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import { HomePage } from './pages/HomePage/Loadable';
import { Monitoring } from './pages/Monitoring/Loadable';
import { Recommendations } from './pages/Recommendations/Loadable';
import { NotFoundPage } from '../components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

import { Layout } from 'components';

export function App() {
  const { i18n } = useTranslation();
  const authenticated = true;
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <ProtectedRoute
          exact
          header="Patient List"
          path={process.env.PUBLIC_URL + '/'}
          component={HomePage}
          authenticated={authenticated}
          bottomToolBar
        />
        <ProtectedRoute
          exact
          path={process.env.PUBLIC_URL + '/monitoring/:id'}
          component={Monitoring}
          authenticated={authenticated}
        />
        <ProtectedRoute
          exact
          path={process.env.PUBLIC_URL + '/recommendations/:id'}
          component={Recommendations}
          authenticated={authenticated}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        rest.authenticated ? (
          <Layout
            header={rest.header}
            bottomToolBar={Boolean(rest.bottomToolBar)}
          >
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
