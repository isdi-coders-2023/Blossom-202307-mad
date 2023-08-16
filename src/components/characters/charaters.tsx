import { useEffect, useState } from 'react';
import { ApiURL } from '../../Data/data';
import { Character } from '../../model/character';
import { ApiSimpsonsRepository } from '../api-repository/api-characters-repository';
import { Card } from '../card/card';

export function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loadMore, setLoadMore] = useState(ApiURL);

  async function loadCharacters(): Promise<Character> {
    try {
      const repo = new ApiSimpsonsRepository(loadMore);
      const characterData = await repo.getAll();
      setCharacters(characterData.docs);
      setLoadMore(ApiURL + characterData.nextPage);
      console.log(loadMore);
    } catch {
      console.log('Error');
    }
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div>
      <ul>
        {characters.map((item, index) => (
          <Card key={index} character={item}></Card>
        ))}
      </ul>
      <button onClick={() => loadCharacters()}>Next</button>
    </div>
  );
}
