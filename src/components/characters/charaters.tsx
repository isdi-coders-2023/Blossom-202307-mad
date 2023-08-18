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
        {characters.map((item) => (
          <Card key={item.id} character={item}></Card>
        ))}
      </ul>
    </div>
  );
}
