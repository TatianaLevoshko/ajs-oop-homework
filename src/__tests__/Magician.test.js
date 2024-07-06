import Character from '../js/character/Magician.js';


test('should create Magician character', () => {
  const character = new Character('Test', 'Magician');
  expect(character.name).toBe('Test');
  expect(character.type).toBe('Magician');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});
