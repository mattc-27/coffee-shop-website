import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route,
    BrowserRouter
} from 'react-router-dom';

import './style.css'

import Home from './pages/Home';
import About from './pages/About';
import MenuPage from './pages/MenuPage';
import Layout from './components/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/menu',
        element: <MenuPage />
    },
    {
        path: '/about',
        element: <About />
    }
])
export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/menu' element={<MenuPage />} />
                    <Route path='/about' element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}