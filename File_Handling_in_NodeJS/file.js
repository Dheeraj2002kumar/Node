// fs -> file system (file handling)

const fs = require("fs");

// Sync.. -> synchronous call
// fs.writeFileSync("./text.txt", "Hello Node..");



// Async.. -> Asynchronous call
fs.writeFile("./test.txt", "Hello Node Async...", (err) => {});