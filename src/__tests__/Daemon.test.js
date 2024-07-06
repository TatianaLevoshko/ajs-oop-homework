import Character from '../js/character/Daemon.js';

test('should create Daemon character', () => {  
	const character = new Character('Test', 'Daemon');  
	expect(character.name).toBe('Test');  
	expect(character.type).toBe('Daemon');  
	expect(character.health).toBe(100);  
	expect(character.level).toBe(1);  
	expect(character.attack).toBe(10);
});