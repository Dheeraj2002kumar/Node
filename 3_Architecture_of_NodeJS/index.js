const fs = require("fs");

// console.log("1");

// // Blocking request
// const result = fs.readFileSync("../File_Handling_in_NodeJS/contact.txt", "utf8");

// console.log(result);

// console.log("2");




// -------- Non-blocking req.. ---------

// console.log("1");

// Blocking request
fs.readFile("../File_Handling_in_NodeJS/contact.txt", "utf8", (err, result) => {
    // console.log(result);
});


// console.log("2");


// -------- check cpu core ---------------
// Default Thread pool size = 4
// Max? - My cpu core is 8

const os = require("os")

console.log(os.cpus().length);