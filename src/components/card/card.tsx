import { Link } from 'react-router-dom';
import { Character } from '../../model/character';
import styles from './card.module.scss';

type Props = {
  character: Character;
};
export function Card({ character }: Props) {
  return (
    <li className={styles['listCharacters']}>
      <Link to={`/detail/${character.id}`} className={styles['cardCharacter']}>
        <img
          className={styles['characterPicture']}
          src={character.image}
          alt="imagen de los simpsons"
        />

        <div className={styles['text']}>
          <h2>{character.name}</h2>
          <h3>{character.job}</h3>
        </div>
      </Link>
    </li>
  );
}
