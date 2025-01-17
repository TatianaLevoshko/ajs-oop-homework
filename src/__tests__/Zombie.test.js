import Character from '../js/character/Zombie.js';

test('should create Zombie character', () => {
  const character = new Character('Test', 'Zombie');
  expect(character.name).toBe('Test');
  expect(character.type).toBe('Zombie');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});
