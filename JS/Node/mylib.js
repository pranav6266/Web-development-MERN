// let name = "Sachin";
// module.exports = name;

// module.exports = "Virat";

// module.exports = [1,2,3,4,5];

// module.exports = {
//     uid : 1001,
//     uName : "Sachin"
// }

//Most commonly used
function myFunA(){
    console.log("Function A Calling.....");
}

function myFunB(){
    console.log("Function B Calling....");
}

module.exports = {myFunA,myFunB};