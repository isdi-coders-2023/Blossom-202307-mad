import { useContext, useEffect } from 'react';
import { WebContext } from '../../context/app-context';
import { Character } from '../../model/character';
import { Card } from '../card/card';
import { Filters } from '../filters/filters';

export function Characters() {
  const {
    charactersContext: { characters, loadCharacters },
  } = useContext(WebContext);

  useEffect(() => {
    loadCharacters(0);
  }, [loadCharacters]);

  return (
    <div>
      <Filters></Filters>
      <ul>
        {characters.map((item: Character, index: number) => (
          <Card key={index} character={item}></Card>
        ))}
      </ul>
      <button onClick={() => loadCharacters(-1)}>Previo</button>
      <button onClick={() => loadCharacters(1)}>Siguiente</button>
    </div>
  );
}
