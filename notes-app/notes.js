const { default: chalk } = require("chalk");
const fs = require("fs");

const addNotes = (title, body) => {
  const notes = loadNotes();
  const alreadyExist = notes.filter((note) => note.title === title);

  if (alreadyExist.length === 0) {
    notes.push({ title: title, body: body });

    saveNotes(notes);
    console.log(chalk.bgGreenBright("New Note added"));
  } else {
    console.log(chalk.bgRedBright("Notes already exist"));
  }
};
const showNotes = () => {
  const notes = loadNotes();

  debugger
  
  if (notes.length === 0) {
    console.log("No notes available");
  } else {
    console.log("your Notes");

    notes.forEach((note) => {
      console.log(note.title);
    });
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filterdNotes = notes.filter((note) => note.title !== title);

  if (notes.length === filterdNotes.length)
    console.log(chalk.bgRedBright("note does not exist with this title"));
  else {
    saveNotes(filterdNotes);
    console.log(chalk.bgGreenBright("note removed successfullly"));
  }
};

module.exports = {
  addNotes: addNotes,
  removeNote: removeNote,
  showNotes: showNotes,
};
