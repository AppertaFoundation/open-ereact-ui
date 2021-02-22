import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import { P } from './P';
import { Helmet } from 'react-helmet-async';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <Title>
          4
          <S role="img" aria-label="Crying Face">
            😢
          </S>
          4
        </Title>
        <P>Page not found.</P>
      </Wrapper>
    </>
  );
}
export const Wrapper = styled('div')(() => {
  return {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '320',
  };
});
export const Title = styled('p')(() => {
  return {
    marginTop: '-8vh',
    fontWeight: 'bold',
    color: 'black',
    fontSize: '3.375rem',
  };
});

export const S = styled('span')(() => {
  return {
    fontSize: '3.125rem',
  };
});
