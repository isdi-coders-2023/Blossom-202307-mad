import { Link } from 'react-router-dom';
import { Character } from '../../model/character';

type Props = {
  character: Character;
};
export function Card({ character }: Props) {
  return (
    <li className="listCharacters">
      <Link to={`/detail/${character.id}`} className="cardCharacter">
        <img
          src={character.image}
          alt="imagen de los simpsons"
          className="characterPicture"
        />
        <div>
          <h2>{character.name}</h2>
          <h3>{character.job}</h3>
        </div>
      </Link>
    </li>
  );
}
