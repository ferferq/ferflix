import { AppProps } from 'next/app';
import { ModalMovieInfoProvider } from '../context/ModalMovieInfo';
import { SelectedMovieInfoProvider } from '../context/SelectedMovieInfo';
import {GlobalStyle} from '../styles/globals';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <SelectedMovieInfoProvider>
      <ModalMovieInfoProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </ModalMovieInfoProvider>
    </SelectedMovieInfoProvider>
  );
}

export default MyApp;
