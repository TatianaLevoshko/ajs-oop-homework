import Character from '../js/Character.js';

test('should create character', () => {
  const character = new Character('Test', 'Bowerman');
  expect(character.name).toBe('Test');
  expect(character.type).toBe('Bowerman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBeUndefined();
  expect(character.defence).toBeUndefined();
});


test('should throw error for invalid name', () => {
  expect(() => new Character('', 'Bowerman')).toThrow(
    'Ошибка в параметре name',
  );
  expect(() => new Character('T', 'Bowerman')).toThrow(
    'Ошибка в параметре name',
  );
  expect(() => new Character('ThisNameIsWayTooLong', 'Bowerman')).toThrow(
    'Ошибка в параметре name',
  );
});


test('should throw error for invalid type', () => {
  expect(() => new Character('Test', 'InvalidType')).toThrow(
    'Ошибка в параметре type',
  );
});


test('should level up character', () => {
  const character = new Character('Test', 'Bowerman');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBeCloseTo(12);
  expect(character.defence).toBeCloseTo(12);
  expect(character.health).toBe(100);
});


test('should throw error when leveling up a dead character', () => {
  const character = new Character('Test', 'Bowerman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Нельзя воскресить мертвеца');
});

// Тест на нанесение урона персонажу
test('should apply damage', () => {
  const character = new Character('Test', 'Bowerman');
  character.defence = 25;
  character.damage(20);
  expect(character.health).toBe(85);
});

test('should not reduce health below zero', () => {
  const character = new Character('Test', 'Bowerman');
  character.defence = 25;
  character.damage(500);
  expect(character.health).toBe(0);
});
