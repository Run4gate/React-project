import "./CharacterCard.css";

type CharacterCardProps = {
  id: number,
  status: string,
  name: string,
  image: string
}

export const CharacterCard = ({id, status, name, image}: CharacterCardProps) => (
  <li
    className="character-card"
    style={{ backgroundImage: `url(${image})` }}
  >
    <h2 className="character-card_title">{name}</h2>
  </li>
);