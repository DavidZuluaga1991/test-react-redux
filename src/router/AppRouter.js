import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route 
    // Redirect
  } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
// import './../styles/styles.scss';

function AppRouter() {
    return (
        <Router>
            <Layout>
                <Suspense>
                    <Switch>
                        <Route component={Home} path='/' exact />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    )
}

export default AppRouter
