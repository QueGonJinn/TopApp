import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { FunctionComponent } from 'react';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<main>
				<Sidebar />
				<div>
					{children}
				</div>
			</main>
			<Footer />
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Commponent: FunctionComponent<T>)  => {
	return function withLayoutComponent (props: T): JSX.Element {
		return (
			<Layout>
				<Commponent {...props} />
			</Layout>
		);
	};
};