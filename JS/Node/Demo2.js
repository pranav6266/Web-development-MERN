// File handling
const fs = require("fs"); //Inbuilt module for file handling


// // This is to write new data
// fs.writeFile("./DemoFile.txt", "Hello World!", (err,data) => {
//     if(err){
//         console.log("Error: " + err);
//     }else{
//         console.log("Success!");
//     }
// });

// //This is to append something to file.
// let str = "A quick brown fox jumps over the lazy dog."
// fs.appendFile("./DemoFile.txt","\n"+str,(err) => {
//     if (err) {
//         console.log("Error: ".err);
//     }else{
//         console.log("Data Saved Successfully!");
//     }
// });

//This is to read a file
fs.readFile("./DemoFile.txt",(err,data)=> {
    if(err){
        console.log(err);
    }else{
        console.log("Data:  ",data.toString());
    }
})