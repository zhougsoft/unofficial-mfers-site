import Head from 'next/head';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

interface LayoutProps {
	pageTitle: string;
	pageDesc: string;
	children?: ReactNode | ReactNode[];
}

const Layout: FC<LayoutProps> = ({ pageTitle, pageDesc, children }) => {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageDesc} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav>
				<Link href="/">home</Link>
				<br />
				<Link href="/mfercoin">mfercoin</Link>
				<br />
				<Link href="/timeline">timeline</Link>
				<br />
				<Link href="/treasury">treasury</Link>
			</nav>
			<div className="max-w-prose">{children}</div>
		</>
	);
};

export default Layout;
