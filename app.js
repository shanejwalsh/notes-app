const chalk = require('chalk');
const yargs = require('yargs');
getNotes = require('./notes');

yargs.version('1.0.1');

yargs.command({
	command: 'add',
	description: 'Add a note',
	builder: {
		title: { describe: 'Note Title', demand: true, type: 'string' },
		body: { describe: 'Note Body', demand: true, type: 'string' }
	},
	handler: argv => {
		console.log('Title: ' + argv.title);
		console.log('Note: ' + argv.body);
	}
});

yargs.command({
	command: 'remove',
	description: 'Remove a note',
	handler: () => console.log('removing note')
});
yargs.command({
	command: 'list',
	description: 'List all notes',
	handler: () => console.log('listing the notes')
});
yargs.command({
	command: 'read',
	description: 'Read a note',
	handler: () => console.log('reading a note')
});

// console.log(yargs.argv);

yargs.parse();
