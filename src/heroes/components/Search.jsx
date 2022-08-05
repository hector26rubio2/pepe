import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { Toast } from 'primereact/toast';
import { getHeroesByName } from '../helpers';
import { HeroCard } from './HeroCard';
import { useRef } from 'react';

export const Search = () => {

    const toastTL = useRef(null);
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);
    const showError = (q.length > 0) && heroes.length === 0;
    const showTopLeft = () => {
        toastTL.current.show({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
    }

    return (
        <>
            <h1>Results</h1>
            <hr />
            <Toast ref={toastTL} position="top-left" />

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No hero with <b>{ q }</b>
            </div>
            <div className=' m-2 flex justify-content-start flex-wrap card-container  animate__animated animate__fadeIn'>
                {
                    heroes.map(hero => (
                        <li className='col-12 md:col-6 lg:col-4  flex align-items-center justify-content-center' key={hero.id}>
                            <HeroCard key={hero.id}
                                {...hero} />
                        </li>
                    ))
                }
            </div>

        </>
    )
}
