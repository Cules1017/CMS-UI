import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import Header from './Header/Header';

const Layout = () => {
    return (
        // <div>
        //     <Header/>
        //     <
        // </div>
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <div>
                                        <Header />
                                        <Page />
                                    </div>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
};

export default Layout;
