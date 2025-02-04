import { FC } from "react";
import "./SearchPage.css";
import { SearchBar } from "src/components/SearchBar";
import { CharacterSlider } from "../../components/CharacterList";
import { SearchErrorBoundary } from "../../components/ErrorBoundary/SearchErrorBoundary";

export const SearchPage: FC = () => {
  return (
    <div className="searchpage-wrapper container">
      <h1 className="searchpage-title">
        Search for your favorite characters right here!
      </h1>
      <SearchBar filterPosition="bottom" />
      <SearchErrorBoundary>
        <CharacterSlider />
      </SearchErrorBoundary>
    </div>
  );
};