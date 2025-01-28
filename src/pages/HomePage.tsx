import { FC } from "react";
import { SearchBar } from "src/components/SearchBar";
import './HomePage.css'
import homeImg from '../assets/home.png'

export const HomePage: FC = () =>
  (
      <div className="container homepage-wrapper">
        <h1 className="homepage-title">
          Welcome to the best Rick and Morty Website in all of the Multiverse
        </h1>
        <img className="homepage-logo" src={homeImg} alt="Whoops!" />
        <div className="homepage-search_wrapper">
        <p>
          Start exploring all of the sentient (at least we consider them to be such) beings who showed up in the series
        </p>
        <SearchBar />
        </div>
      </div>
  );