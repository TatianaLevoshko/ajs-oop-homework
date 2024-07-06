import Character from '../js/character/Bowerman.js';

test('should create Bowerman character', () => {
  const character = new Character('Test', 'Bowerman');
  expect(character.name).toBe('Test');
  expect(character.type).toBe('Bowerman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});
