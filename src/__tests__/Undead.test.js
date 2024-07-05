import Character from '../js/character/Undead.js';

// Тест на создание корректного персонажа
test('should create Undead character', () => {
  const character = new Character('Test', 'Undead');
  expect(character.name).toBe('Test');
  expect(character.type).toBe('Undead');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});
