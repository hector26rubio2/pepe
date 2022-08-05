
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/';
import {  HeroesRoutes }from '../heroes';

function AppRouter() {

    return (
        <>

            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route path='/*' element={<HeroesRoutes />}></Route>
            </Routes>
        </>
    );
}

export default AppRouter;