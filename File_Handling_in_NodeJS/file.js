// fs -> file system (file handling)

const fs = require("fs");

// -------- Write file (Override) ----------------
// Sync.. -> synchronous call
// fs.writeFileSync("./text.txt", "Hello Node..");



// Async.. -> Asynchronous call
// fs.writeFile("./test.txt", "Hello Node Async...", (err) => {});


// ------------- Read file ------------

// Sync..
// const result = fs.readFileSync("./contact.txt", "utf8");
// console.log(result)


// Async...
// fs.readFile("./contact.txt", "utf8", (error, result) => {
//     if (error){
//         console.log("Error", error);
//     } else {
//         console.log(result);
//     }
// })



// -------------- Write file (Not override) -----------

fs.appendFileSync("./test.txt", `\n ${Date.now()} Hey There.`)



// ------------- Copy file -------------------

// fs.cpSync("./test.txt", "./copy.txt")



// ------------ Delete (unlink file) -----------

fs.unlinkSync("./copy.txt")