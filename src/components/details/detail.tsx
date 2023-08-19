import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
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
    <div className={styles['background']}>
      <div className={styles.mainInfo}>
        <p className={styles['name']}>{character.name}</p>
        <p> {character.job}</p>
      </div>
      <img
        src={character.image}
        alt="imagen de los simpsons"
        className={styles.characterPicture}
      />
      <button className={styles['button']}>AÑADIR A FAVORITOS</button>
      <div className={styles.box1}>
        <p className={styles['p']}> {character.history}</p>
        <div className={styles.btnDown}>
          <button className={`${styles.button} ${styles.bigButton}`}>
            BORRAR
          </button>

          <Link to={'/simpsons'} className={styles['button']}>
            <h3>ATRÁS</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
