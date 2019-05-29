const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
	const notes = loadNotes();

	const duplicateNote = notes.find(note => note.title === title);
	if (!duplicateNote) {
		notes.push({ title, body });
		saveNotes(notes);
		console.log('new note added');
	} else {
		console.log('note title taken');
	}
};

const removeNote = title => {
	const notes = loadNotes();

	const notesToKeep = notes.filter(note => note.title !== title);

	if (notesToKeep.length !== notes.length) {
		saveNotes(notesToKeep);
		console.log(chalk.bgGreen(`"${title}" removed`));
	} else {
		console.log(chalk.bgRed(`Note with title "${title}" not found`));
	}
};

const listNotes = () => {
	notes = loadNotes();
	console.log(`You have ${notes.length} notes: `);
	notes.forEach(note => {
		console.log(note.title);
	});
};

const readNote = title => {
	searchedNote = loadNotes().find(note => note.title === title);

	if (searchedNote) {
		console.log(searchedNote.body);
	} else {
		console.log(chalk.bgRed(`Note with title "${title}" not found`));
	}
};

const saveNotes = notes => {
	fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

module.exports = { addNote, removeNote, listNotes, readNote };
