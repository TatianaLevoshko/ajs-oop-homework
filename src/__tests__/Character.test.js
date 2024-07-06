import Character from '../js/Character.js';

// Тест на создание корректного персонажа
test('should create character', () => {
  const character = new Character('Test', 'Bowerman');
  expect(character.name).toBe('Test');
  expect(character.type).toBe('Bowerman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBeUndefined();
  expect(character.defence).toBeUndefined();
});

// Тест на ошибку при некорректном имени
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

// Тест на ошибку при некорректном типе
test('should throw error for invalid type', () => {
  expect(() => new Character('Test', 'InvalidType')).toThrow(
    'Ошибка в параметре type',
  );
});

// Тест на повышение уровня персонажа
test('should level up character', () => {
  const character = new Character('Test', 'Bowerman');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBeCloseTo(12); // 10 * 1.2 = 12
  expect(character.defence).toBeCloseTo(12); // 10 * 1.2 = 12
  expect(character.health).toBe(100);
});

// Тест на ошибку при попытке повысить уровень мертвого персонажа
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
  expect(character.health).toBe(85); // 100 - 20 * (1 - 25 / 100) = 85
});

// Тест на то, что здоровье персонажа не опустится ниже нуля
test('should not reduce health below zero', () => {
  const character = new Character('Test', 'Bowerman');
  character.defence = 25;
  character.damage(500);
  expect(character.health).toBe(0);
});