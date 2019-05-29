const fs = require("fs");

//Created a folder then delete it.
// fs.mkdir("tutorial", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.rmdir("tutorial", err => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("deleted folder.");
//       }
//     });
//   }
// });

//Created a file within a dir.
// fs.mkdir("tutorial", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile("./tutorial/example.txt", "This is the content", err => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("File was written");
//       }
//     });
//   }
// });

//Delete a dir with content inside. Need to delete content inside first. then rm dir.
// fs.unlink("./tutorial/example.txt", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.rmdir("tutorial", err => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("delete dir");
//       }
//     });
//   }
// });

//Deleting all content inside a dir.
fs.readdir("example", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    for (let file of files) {
      fs.unlink("./example/" + file, err => {
        if (err) {
          console.log(err);
        } else {
          console.log("deleted file");
        }
      });
    }
  }
});
