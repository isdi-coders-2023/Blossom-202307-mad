import { useEffect, useState } from 'react';
import { ApiURL } from '../../Data/data';
import { Character } from '../../model/character';
import { ApiSimpsonsRepository } from '../api-repository/api-characters-repository';
import { Card } from '../card/card';

export function Characters() {
  const [characters, setCharacters] = useState([]);
  const repo = new ApiSimpsonsRepository(ApiURL);
  useEffect(() => {
    async function loadCharacters(): Promise<Character> {
      try {
        const characterData = await repo.getAll();
        setCharacters(characterData);
      } catch {
        console.log('Error');
      }
    }
    loadCharacters();
  }, []);

  return (
    <ul>
      {characters.map((item) => (
        <Card character={item}></Card>
      ))}
    </ul>
  );
}
