const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleSettings = {
	describe: 'Title of note',
	demand: true,
	alias: 't'	
}

const bodySettings = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'	
}

const argv = yargs
	.command('add', 'Add a new note', { 
		title: titleSettings,
		body: bodySettings
	})
	.command('list', 'List all the notes')
	.command('read', 'Read the note', {
		title: titleSettings
	})
	.command('remove', 'Remove the note', {
		title: titleSettings		
	})
	.help()
	.argv;
	
var command = argv._[0];


if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log(`Note created. Title: ${note.title}, Body: ${note.body}`);
	} else {
		console.log('Title already exists!');
	}
	
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s)`);
	allNotes.forEach( note => console.log(`Title: ${note.title}, Body: ${note.body}`) );
} else if (command === 'read') {
	const readNote = notes.getNote(argv.title);
	const message = readNote ? `Reading Note. Title: ${readNote.title}, Body: ${readNote.body}` : 'Note not found';
	console.log(message);
	
} else if (command === 'remove') {
	const remove = notes.removeNote(argv.title);
	const message = remove ? 'Note was removed' : 'Note not found';
	console.log(message); 
} else {
	console.log('command not recognized');
}







