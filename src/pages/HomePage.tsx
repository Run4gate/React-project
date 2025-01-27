import Searchbar from "../components/Searchbar";
import './HomePage.css'
import homeImg from '../assets/home.png'

const HomePage = () => {
  return (
      <div className="homepage-wrapper container">
        <h1 className="homepage-title">
          Welcome to the best Rick and Morty Website in all of the Multiverse
        </h1>
        <img className="homepage-logo" src={homeImg} alt="Whoops!" />
        <div className="homepage-search_wrapper">
        <p>
          Start exploring all of the sentient (at least we consider them to be such) beings who showed up in the series
        </p>
        <Searchbar />
        </div>
      </div>
  );
};
export default HomePage;