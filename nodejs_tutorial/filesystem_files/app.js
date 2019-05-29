const fs = require("fs");

//create a file and read it example

// fs.writeFile("example.txt", "This is an example", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.readFile("example.txt", "utf8", (err, file) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(file);
//       }
//     });
//   }
// });

//----------------//

//Rename a file

// fs.rename("example.txt", "example2.txt", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("succsefully renamed file.");
//   }
// });

//----------------//

//Append data to a file.
// fs.appendFile("example2.txt", "Some data being appended.", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Sucsessfully appended data to file");
//   }
// });

//----------------//

//Delete file

fs.unlink("example2.txt", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("sucsesfully deleted file");
  }
});
