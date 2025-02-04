import { useId, useState } from "react";
import { Link } from "react-router";
import './CharacterCard.css';
import type { CharacterSchema } from "src/http/characterTypes";
import { PATHS } from "src/utils/constants";
import { StarButton } from "./StarButton";
import { PlanetSpinner } from "./PlanetSpinner";

type CharacterCardProps = {
    character: CharacterSchema
};

export function CharacterCard({character}: CharacterCardProps) {
    const [checked, setChecked] = useState<boolean>(false);
    const key = useId()
    function handleStarChange() {
        setChecked(!checked)
    }

    return (
        <div className="c-card-container" key={key}>
        { !character 
            ? <PlanetSpinner className="c-card-spinner"/>
            : <>
                <img className="c-card-image" src={character.image} alt="character"/>
                <Link 
                    className="c-card-link"
                    to={PATHS.CHARACTER} 
                    state={character}
                >
                    <span>{character.name}</span>
                 </Link>
                <StarButton 
                    className="c-card-fav" 
                    checked={checked} 
                    onChange={handleStarChange}
                />
              </>  
        }
        </div>
    )
}