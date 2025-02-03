import { useState } from 'react';
import { useLocation, Navigate } from 'react-router';
import './CharacterPage.css';
import { type CharacterSchema } from 'src/http/characterTypes';
import { PATHS } from 'src/utils/constants';
import { FavoriteButton } from './FavoriteButton';

export function CharacterPage() {
    const location = useLocation()
    const { character }: {character?: CharacterSchema} = location.state ?? {};
    const [checked, setChecked] = useState<boolean>(false);
    return(
        <> { character
            ?
            <div className='c-page-grid'>
                <div className='c-page-left-col'>
                    <img className='c-page-image' src={character.image}/>
                    <FavoriteButton 
                        className='c-page-fav' 
                        checked={checked}
                        onChange={() => setChecked(!checked)}/>
                </div>
                <div className='c-page-right-col'>
                    <ul className='c-page-info'>
                        <li><b>Name:</b> {character.name}</li>
                        <li><b>Status:</b> {character.status}</li>
                        <li><b>Species:</b> {character.species}</li>
                        <li><b>Type:</b> {character.type || '-'}</li>
                        <li><b>Gender:</b> {character.gender}</li>
                    </ul>
                </div>
                    
               
            </div>
            :
            <Navigate to={PATHS.HOME}/>
        } </>
    )
}