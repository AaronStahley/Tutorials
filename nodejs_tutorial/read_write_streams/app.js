/*
BENIFITS OF STREAMS> 
Able to write chunks before file is even loaded. streams dont use a full buffer. not attempting to read a huge file at once.
*/

const fs = require("fs");
const zlib = require("zlib"); //compresion module.

//Variables for .txt to compressed .zip
const gzip = zlib.createGzip(); //Transfoem stream.
const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("example2.txt.gz");

//Variables for compressed to txt
const gunzip = zlib.createGunzip();
const zipreadStream = fs.createReadStream("./example2.txt.gz");
const uncompressedWriteStream = fs.createWriteStream("uncompressed.txt");

// readStream.on("data", chunk => {
//   writeStream.write(chunk);
// });

//Short hand of read and write stream
// readStream.pipe(writeStream);

//Reading .txt and writing it to .zip.
readStream.pipe(gzip).pipe(writeStream);

//Reading zip file and writing it to .txt
zipreadStream.pipe(gunzip).pipe(uncompressedWriteStream);
