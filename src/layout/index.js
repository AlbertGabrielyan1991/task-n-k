import React from 'react';
import { Route, Routes } from 'react-router-dom';

import  Header  from '../components/Header';
import paths from '../routes';

const Layout = () => (
  <div>
    <Header />
    <main>
        <Routes>
            {paths.map(({ path, key, component}) => <Route path={path} key={key} Component={component} />)}
        </Routes>
    </main>
  </div>

);
export default Layout;
