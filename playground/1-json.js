const fs = require("fs");

const book = {
  title: "My Book",
  author: "json brother",
};

// console.log(book);

// const bookJson = JSON.stringify(book);  // convert object into json
// console.log(bookJson);
// console.log(bookJson.title);  // here in json it is undefine

// const parseData =JSON.parse(bookJson);   // convert json into object
// console.log(parseData.title) // here in normal object it is ok

const bookJson = JSON.stringify(book);
fs.writeFileSync("1-json.json", bookJson);

const dataBuffer = fs.readFileSync("1-json.json");
console.log(dataBuffer);
const data = dataBuffer.toString();
console.log(data);

const parsedData = JSON.parse(data);
parsedData.author = "shakespeare";
console.log(parsedData);

fs.writeFileSync("1-json.json", JSON.stringify(parsedData));
