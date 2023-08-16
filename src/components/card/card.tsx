import { Character } from '../../model/character';

type Props = {
  character: Character;
};
export function Card({ character }: Props) {
  return (
    <li className="listCharacters">
      <div className="cardCharacter">
        <img
          src={character.image}
          alt="imagen de los simpsons"
          className="characterPicture"
        />
        <div>
          <h2>{character.name}</h2>
          <h3>{character.job}</h3>
        </div>
      </div>
    </li>
  );
}
