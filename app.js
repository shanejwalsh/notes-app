const fs = require('fs');

const chalk = require('chalk');
const yargs = require('yargs');
notes = require('./notes');

yargs.version('1.0.1');

yargs.command({
	command: 'add',
	description: 'Add a note',
	builder: {
		title: { describe: 'Note Title', demand: true, type: 'string' },
		body: { describe: 'Note Body', demand: true, type: 'string' }
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	}
});

yargs.command({
	command: 'remove',
	description: 'Remove a note',
	builder: { title: { describe: 'Note Title', demand: true, type: 'string' } },
	handler(argv) {
		notes.removeNote(argv.title);
	}
});
yargs.command({
	command: 'list',
	description: 'List all notes',
	handler() {
		notes.listNotes();
	}
});
yargs.command({
	command: 'read',
	description: 'Read a note',
	builder: { title: { describe: 'Note Title', demand: true, type: 'string' } },
	handler(argv) {
		notes.readNote(argv.title);
	}
});

// console.log(yargs.argv);

yargs.parse();
