import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { useEffect } from 'react';

const App = ({ Component, pageProps }) => {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap');
	}, []);

	return <>
		<Head>
			<title>IPTVX Web</title>
			<link rel="shortcut icon" href="/favicon.ico" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="IPTV Player for TV" />
		</Head>
		<Component {...pageProps} />
	</>;
}

export default appWithTranslation(App);