import { useContext, useEffect } from 'react';
import { WebContext } from '../../context/app-context';
import { Character } from '../../model/character';
import { Card } from '../card/card';
import styles from './characters.module.scss';

export function Characters() {
  const {
    charactersContext: { characters, loadCharacters },
  } = useContext(WebContext);

  useEffect(() => {
    loadCharacters(0);
  }, [loadCharacters]);

  return (
    <div className={styles.buttonBox}>
      <ul>
        {characters.map((item: Character, index: number) => (
          <Card key={index} character={item}></Card>
        ))}
      </ul>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={() => loadCharacters(-1)}>
          {'<'}
        </button>

        <button className={styles['btn']} onClick={() => loadCharacters(1)}>
          {'>'}
        </button>
      </div>
    </div>
  );
}
