import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return (alter_ego === characters)
        ? <></>
        : <p>{characters}</p>;
}

export const HeroCard = (
    {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    }
) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`;


    return (
        <div className='card bg border-round'>


            <div className='grid  grid-nogutter pl-0 '>

                <div className="col-4 flex " >
                    <img src={heroImageUrl} alt={superhero} className='img' />
                </div>
                <div className="col-8  align-items-center  p-2">
                    <h2 className="card-title">{superhero}</h2>
                    <h4 className="card-text">{alter_ego}</h4>

                    {/* {
                                ( alter_ego !== characters ) && charactesByHero
                                ( alter_ego !== characters ) && <p>{ characters }</p>
                            } */}
                    <CharactersByHero characters={characters} alter_ego={alter_ego} />

                    <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                    </p>

                    <Link to={`/hero/${id}`}>
                        Más..
                    </Link>
                </div>

            </div>


        </div
        >



    )
};

