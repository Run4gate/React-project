import "./CharacterSlider.css";
import { CharacterCard } from "../CharacterCard";
import { SvgButton } from "../../assets";
import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchError, searchResults, history } from "../../utils/selectors";
import { setSearchResults, setSearchError,} from "../../store/searchSlice";
import {
  fetchCharacterPage,
  fetchFilteredCharacters,
  fetchAllCharacters,
} from "../../http/characterAPI";

export const CharacterSlider = () => {
  const dispatch = useDispatch();
  const error = useSelector(searchError);
  const response = useSelector(searchResults);
  const historyList = useSelector(history);
  const characters = response?.results || [];
  const nextPage = response?.info.next;
  const prevPage = response?.info.prev;

  useLayoutEffect(() => {
    if (error) {
      throw new Error(error);
    }
    const fetchIfEmpty = async () => {
      if (!characters.length && error === "" && historyList.length) {
        try {
          const data = await fetchFilteredCharacters(historyList[0]);
          dispatch(setSearchResults(data));
        } catch (err) {
          if ((err.code = "ERR_BAD_REQUEST")) {
            try {
              const data = await fetchAllCharacters()
              dispatch(setSearchResults(data));
            } catch (err) {
              dispatch(setSearchError(err.code))
            }
          } else {
            dispatch(setSearchError(err.code))
          }
        }
      }
    };
    fetchIfEmpty();
  }, [error]);

  const handlePreviousPage = async () => {
    if (prevPage) {
      try {
        const data = await fetchCharacterPage(prevPage);
        dispatch(setSearchResults(data));
      } catch (err) {
        dispatch(setSearchError(err.code));
      }
    }
  };
  const handleNextPage = async () => {
    if (nextPage) {
      try {
        const data = await fetchCharacterPage(nextPage);
        dispatch(setSearchResults(data));
      } catch (err) {
        dispatch(setSearchError(err.code));
      }
    }
  };

  return (
    <div className="character-slider">
      <button
        className={
          prevPage
            ? "character-slider_button-back"
            : "character-slider_button-back --inactive"
        }
        onClick={handlePreviousPage}
      >
        <SvgButton inactive={prevPage ? false : true} />
      </button>
      <ul className="character-slider_items">
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </ul>
      <button
        className={
          nextPage
            ? "character-slider_button-forward"
            : "character-slider_button-forward --inactive"
        }
        onClick={handleNextPage}
      >
        <SvgButton inactive={nextPage ? false : true} />
      </button>
    </div>
  );
};
