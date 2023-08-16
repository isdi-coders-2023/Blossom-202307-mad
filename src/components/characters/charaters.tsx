import { useContext, useEffect } from 'react';
import { WebContext } from '../../context/app-context';
import { Card } from '../card/card';

export function Characters() {
  const {
    charactersContext: { characters, loadCharacters },
  } = useContext(WebContext);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <div>
      <ul>
        {characters.map((item, index) => (
          <Card key={index} character={item}></Card>
        ))}
      </ul>
    </div>
  );
}
