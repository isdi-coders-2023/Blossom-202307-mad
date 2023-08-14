import { ApiSimpsonsRepository } from './api-characters-repository';

describe('Given ApiCharactersRepository class ', () => {
  describe('When we instantiate it', () => {
    const repository = new ApiSimpsonsRepository('');

    test('Then the method getAll should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repository.getAll();
      expect(global.fetch).toHaveBeenCalled();
    });

    test('Then the method getAll should give error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('error'),
      });

      expect(repository.getAll()).rejects.toThrow();
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
      repository.update(characterTest.id, characterUpdatedTest);
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
        repository.update(characterTest.id, characterUpdatedTest)
      ).rejects.toThrow();
    });

    test('Then the method create should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const newCharacterTest = {
        Estado: true,
        Genero: 'Femenino',
        Historia: 'TEST 01.2',
        Imagen: 'img',
        Nombre: 'NAME',
        Ocupacion: 'developer',
        updatedAt: 'test_update',
        id: 'testid',
      };
      repository.create(newCharacterTest);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('Then the method create should give error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('error'),
      });
      const newCharacterTest = {
        Estado: true,
        Genero: 'Masculino',
        Historia: 'TEST 01',
        Imagen: 'img',
        Nombre: 'NAME',
        Ocupacion: 'developer',
        updatedAt: 'test_update',
        id: 'testid',
      };

      expect(repository.create(newCharacterTest)).rejects.toThrow();
    });
    test('Then the method delete should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const newCharacterTest = {
        Estado: true,
        Genero: 'Femenino',
        Historia: 'TEST 01.2',
        Imagen: 'img',
        Nombre: 'NAME',
        Ocupacion: 'developer',
        updatedAt: 'test_update',
        id: 'testid',
      };
      repository.create(newCharacterTest);
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

      expect(repository.delete(newCharacterTest.id)).rejects.toThrow();
    });
  });
});
