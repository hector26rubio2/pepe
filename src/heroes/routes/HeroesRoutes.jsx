import { Navbar } from "../../ui";

import { Route, Routes } from 'react-router-dom';

import { HeroPage, MarvelPage, DcPage } from "../pages";
import { Search } from "../components/Search";


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />


            <div className="align-items-center justify-content-center m-3">
                <Routes>
                    <Route path='/search/*' element={<Search />} />
                    <Route path='/' element={<MarvelPage />} />
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />
                    <Route path='hero/:id' element={<HeroPage />} />
                </Routes>
            </div>




        </>
    );
};

