import { LocalApiSimpsonsRepository } from './local-api-characters-repository';

describe('Given the class LocalApiSimpsonsRepository', () => {
  describe('When I make an instance of it', () => {
    const localRepository = new LocalApiSimpsonsRepository('');

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
      const characterTest = {
        Estado: true,
        Genero: 'Masculino',
        Historia: 'TEST 01',
        Imagen: 'img',
        Nombre: 'NAME',
        Ocupacion: 'developer',
        updatedAt: 'test_update',
        id: 'testid',
      };
      const characterUpdatedTest = {
        Estado: true,
        Genero: 'Femenino',
        Historia: 'TEST 01.2',
        Imagen: 'img',
        Nombre: 'NAME',
        Ocupacion: 'developer',
        updatedAt: 'test_update',
        id: 'testid',
      };
      localRepository.update(characterTest.id, characterUpdatedTest);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then the method update should give error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('error'),
      });
      const characterTest = {
        Estado: true,
        Genero: 'Masculino',
        Historia: 'TEST 01',
        Imagen: 'img',
        Nombre: 'NAME',
        Ocupacion: 'developer',
        updatedAt: 'test_update',
        id: 'testid',
      };
      const characterUpdatedTest = {
        Estado: true,
        Genero: 'Femenino',
        Historia: 'TEST 01.2',
        Imagen: 'img',
        Nombre: 'NAME',
        Ocupacion: 'developer',
        updatedAt: 'test_update',
        id: 'testid',
      };
      expect(
        localRepository.update(characterTest.id, characterUpdatedTest)
      ).rejects.toThrow();
    });

    test('Then the method create should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const newCharacterTest = {
        gender: 'test',
        history: 'test',
        image: 'test',
        name: 'test',
        job: 'test',
        updatedAt: 'test',
        state: 'test',
        id: 'test',
      };
      localRepository.create(newCharacterTest);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then the method create should give error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('error'),
      });
      const newCharacterTest = {
        gender: 'test',
        history: 'test',
        image: 'test',
        name: 'test',
        job: 'test',
        updatedAt: 'test',
        state: 'test',
        id: 'test',
      };

      expect(localRepository.create(newCharacterTest)).rejects.toThrow();
    });
    test('Then the method delete should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const newCharacterTest = {
        gender: 'test',
        history: 'test',
        image: 'test',
        name: 'test',
        job: 'test',
        updatedAt: 'test',
        state: 'test',
        id: 'test',
      };
      localRepository.create(newCharacterTest);
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
