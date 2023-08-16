import { LocalApiSimpsonsRepository } from './local-api-characters-repository';

describe('Given the class LocalApiSimpsonsRepository', () => {
  describe('When I make an instance of it with a mock of two characters', () => {
    const localRepository = new LocalApiSimpsonsRepository('');
    const characterTest = {
      Estado: 'vivo',
      Genero: 'Masculino',
      Historia: 'TEST 01',
      Imagen: 'img',
      Nombre: 'NAME',
      Ocupacion: 'developer',
      updatedAt: 'test_update',
      id: 'testid',
    };
    const characterUpdatedTest = {
      Estado: 'vivo',
      Genero: 'Femenino',
      Historia: 'TEST 01.2',
      Imagen: 'img',
      Nombre: 'NAME',
      Ocupacion: 'developer',
      updatedAt: 'test_update',
      id: 'testid',
    };
    test('Then the method getTotal should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(['Test']),
      });
      localRepository.getTotal();
      expect(global.fetch).toHaveBeenCalled();
    });

    test('Then the method getTotal should give error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('error'),
      });

      expect(localRepository.getTotal()).rejects.toThrow();
    });

    test('Then the method update should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });

      localRepository.update(characterTest.id, characterUpdatedTest);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then the method update should give error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('error'),
      });

      expect(
        localRepository.update(characterTest.id, characterUpdatedTest)
      ).rejects.toThrow();
    });

    test('Then the method create should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const newSimpsonTest = {
        gender: 'test',
        history: 'test',
        image: 'test',
        name: 'test',
        job: 'test',
        updatedAt: 'test',
        state: 'test',
        id: 'test',
      };
      localRepository.create(newSimpsonTest);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then the method create should give error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('error'),
      });
      const newMockedCharacter = {
        gender: 'test',
        history: 'test',
        image: 'test',
        name: 'test',
        job: 'test',
        updatedAt: 'test',
        state: 'test',
        id: 'test',
      };

      expect(localRepository.create(newMockedCharacter)).rejects.toThrow();
    });
    test('Then the method delete should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const aCharacterTest = {
        gender: 'test',
        history: 'test',
        image: 'test',
        name: 'test',
        job: 'test',
        updatedAt: 'test',
        state: 'test',
        id: 'test',
      };
      localRepository.create(aCharacterTest);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then the method delete should give error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('error'),
      });
      const newCharacterTest = {
        id: 'testid',
      };

      expect(localRepository.delete(newCharacterTest.id)).rejects.toThrow();
    });
  });
});
