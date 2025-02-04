import { FC } from "react";
import "./SearchPage.css";
import { SearchBar } from "src/components/SearchBar";
import { CharacterSlider } from "../../components/CharacterList";

const TEST = [
    [
      {
        id: 1,
        name: "Morty Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
      {
        id: 2,
        name: "Morty Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
      {
        id: 3,
        name: "Morty Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
      {
        id: 4,
        name: "Morty Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
      {
        id: 5,
        name: "Morty Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
      {
        id: 6,
        name: "Morty Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
    ],
    [
      {
        id: 7,
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        id: 8,
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        id: 0,
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        id: 10,
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        id: 11,
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        id: 12,
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
    ],
  ];

export const SearchPage: FC = () => {
    return (
    <div className='container searchpage-wrapper'>
        <h1 className='searchpage-title'>Search for your favorite characters right here!</h1>
        <SearchBar filterPosition="bottom"/>
        <CharacterSlider TEST={TEST} />
    </div>
    )
}
