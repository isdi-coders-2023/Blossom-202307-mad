import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { WebContext } from '../../context/app-context';
import { Character } from '../../model/character';
import styles from './detail.module.scss';

export function Detail() {
  const {
    charactersContext: { characters },
  } = useContext(WebContext);
  const { id } = useParams();

  const character = characters.find(
    (character) => character.id === String(id)
  ) as Character;

  return (
    <ul className={styles['list-unstyled']}>
      <li>
        <img
          src={character.image}
          alt="imagen de los simpsons"
          className="characterPicture"
        />
      </li>
      <li>
        <p>Nombre: {character.name}</p>
      </li>
      <li>
        <button className={styles['btnAdd']}>Añadir a Favoritos</button>
      </li>
      <li>
        <p>Historia: {character.history}</p>
      </li>
      <li>
        <button className={styles['buttonDelete']}>Borrar</button>
      </li>
      <li>
        <button className={styles['btnBack']}>Atras</button>
      </li>
    </ul>
  );
}
