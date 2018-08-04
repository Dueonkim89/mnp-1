const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];


if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log(`Note created. Title: ${note.title}, Body: ${note.body}`);
	} else {
		console.log('Title already exists!');
	}
	
} else if (command === 'list') {
	notes.getAll();
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







