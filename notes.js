const fs = require('fs');

var fetchNotes = () => {
	try {
		var previousNotes = fs.readFileSync('notes-data.json');
		return JSON.parse(previousNotes);		
	} catch(error) {
		return [];
	}	
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes)); 
}


var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
		
	var duplicateNotes = notes.filter(note => note.title === title);
	
	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;		
	}	
};

var getAll = () => {
	console.log('Getting all notes');
};

var getNote = (title) => {
	var notes = fetchNotes();
	const foundNotes = notes.filter(note => note.title === title);
	return foundNotes.length ? foundNotes[0] : null;	
};

var removeNote = (title) => {
	var notes = fetchNotes();
	var removed = notes.filter(note => note.title !== title);
	saveNotes(removed);	
	
	return notes.length !== removed.length;
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
}