import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

export const HeroPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(id), [id]);

    const onNavigateBack = () => {
        navigate(-1);
    }
    if (!hero) {
        return <Navigate to="/marvel" />
    }


    return (
        <div className="grid mt-5">
            <div className="col-4">
                <Image
                    src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft "
                    preview
                    width="100%"
                />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
                    <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
                    <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance} </li>
                </ul>

                <h5 className="mt-3"> Characters </h5>
                <p>{hero.characters}</p>

                <Button
                    label="Regresar" className="p-button-rounded p-button-secondary"
                    onClick={onNavigateBack}
                />


            </div>

        </div>
    );
};

