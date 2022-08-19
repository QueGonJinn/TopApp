import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>MyTop</title>
			<link rel="icon" href='/public/favicon.ico' />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
