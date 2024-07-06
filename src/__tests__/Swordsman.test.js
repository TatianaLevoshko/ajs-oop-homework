import Character from '../js/character/Swordsman.js';

test('should create Swordsman character', () => {
  const character = new Character('Test', 'Swordsman');
  expect(character.name).toBe('Test');
  expect(character.type).toBe('Swordsman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});
