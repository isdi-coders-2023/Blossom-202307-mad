import { Character } from '../../model/character';

type Props = {
  character: Character;
};
export function Card({ character }: Props) {
  return (
    <li className="listCharacters">
      <div className="cardCharacter">
        <img
          src={character.Imagen}
          alt="imagen de los simpsons"
          className="characterPicture"
        />
        <div>
          <h2>{character.Nombre}</h2>
          <h3>{character.Ocupacion}</h3>
        </div>
      </div>
    </li>
  );
}
