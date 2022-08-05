import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() =>getHeroesByPublisher(publisher), [publisher]);
    return (
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
    );
};
