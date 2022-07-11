import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Layout from './components/layout/Layout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import routes, { RoutePathDefinition } from './routes/routes';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <>
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        {routes.map(({ path, element }: RoutePathDefinition) => {
                            if (element) {
                                return <Route key={path} path={path} element={element()} />;
                            }
                            return null;
                        })}
                        <Route
                            path="*"
                            element={
                                <main style={{ padding: '1rem' }}>
                                    <p>{`There's nothing here yet!`}</p>
                                </main>
                            }
                        />
                    </>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
