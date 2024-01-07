// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'this file is created by samad')

// fs.appendFileSync('./notes.txt','\nthis is the appended data')

// const add = require('./util');
// console.log(add(4,2));

// const getNotes = require('./notes');
// const notes = getNotes();

// console.log(notes);

// const chalk = require('chalk')
// console.log(chalk.red.underline.bold('Success'));

//how to get command
// const commmad = process.argv[2];
// console.log(process.argv) // argument vector
// console.log(commmad)

// taking using yargs
const yargs = require("yargs");
const { addNotes, removeNote, showNotes } = require("./notes");

// create command in yargs
yargs.command({
  command: "add",
  describe: "Add notes",
  builder: {
    title: {
      describe: "Add title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Add body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove the note",
  builder: {
    title: {
      describe: "Add title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List the note",
  handler(argv) {
    showNotes();
  },
});

yargs.parse(); // now it ways go through the running commmad

// console.log(yargs.argv);
