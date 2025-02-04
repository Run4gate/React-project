import "./CharacterSlider.css";
import { CharacterCard } from "./CharacterCard";
import { SvgButton } from "../../assets";
import { useState } from "react";

type CharacterSliderProps = {
  TEST: {
    id: number;
    name: string;
    image: string;
  }[][];
};

export const CharacterSlider = ({TEST}: CharacterSliderProps) => {
  const [pageNumber, setPageNumber] = useState(0);

  const handlePreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };
  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  return ( <div className="character-slider">
    <button
      className="character-slider_button-back"
      onClick={handlePreviousPage}
    >
      <SvgButton />
    </button>
    <ul className="character-slider_items">
      {TEST[pageNumber].map((character) => (
        <CharacterCard
          id={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </ul>
    <button
      className="character-slider_button-forward"
      onClick={handleNextPage}
    >
      <SvgButton />
    </button>
  </div>
  )
};
