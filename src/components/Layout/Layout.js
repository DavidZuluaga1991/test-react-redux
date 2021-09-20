import React, { Fragment } from 'react';
import Footer from '../Footer/Footer';
import Header from './../Header/Header';

function Layout({ children }) {
    return (
		<Fragment>
			<Header />
			{children}
			<Footer />
		</Fragment>
    )
}

export default Layout
