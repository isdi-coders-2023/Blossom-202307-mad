import { ApiSimpsonsRepository } from './api-characters-repository';

describe('Given ApiCharactersRepository class ', () => {
  describe('When we instantiate it', () => {
    const repository = new ApiSimpsonsRepository('');

    test('Then the method getAll should be used', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(['Test']),
      });
      await expect(global.fetch).toHaveBeenCalled();
    });

    test('Then the method getAll should give error', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('error'),
      });

      await expect(repository.getAll()).rejects.toThrow();
    });
  });
});
