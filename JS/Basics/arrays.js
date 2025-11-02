// // STRINGS
// let str = "Hello world"
// console.log(str)

// // To use double quotes inside string (Use escape strings) or use double quotes in single quote and vice versa
// let str2 = "A quick brown \"fox\" jumps over the lazy dog."


// //  TEMPLATE STRING (backticks and inside use ${variable_name}) using variables in between strings.
// //  Also called as String Interpolation(Automatically detects and uses variable names.)
// //  Here we can also use double/single quotes easily without escape strings.
// let name = "Sachin"
// let age = 51
// let str3 = "Welcome "+name+". Age is "+age
// console.log(str3)

// let str4 = `Welcome ${name}. Age is ${age}`
// console.log(str4)

// // String Function 
// console.log(str2.indexOf("o",str2.indexOf("o")+1))
// console.log(str.lastIndexOf("o"))

// // ARRAYS
// let arr = [1,2,3,4,5]
// arr[1] = 100
// console.log(arr)

// let arr1 = [1, 2, 3, "Sachin", [2,8,4], 4.45]
// console.log(arr1)

// let x = 10
// let y = 20
// [x, y].forEach(console.log)


// // Map function with spread operator implementations
// let productData=[
//     {
//         proId : 1001,
//         proName : "Smart Watch",
//         proPriceUSD : 149 
//     },
//     {
//         proId: 1002,
//         proName: "Earphone",
//         proPriceUSD: 249
//     },
//     {
//         proId: 1003,
//         proName: "Mobile",
//         proPriceUSD: 699
//     }
// ];

// let productDataINR = productData.map((product) => {
//     return {
//         ...product,
//         proPriceINR : product.proPriceUSD * 85
//     };
// })

// console.log(productDataINR);
// console.log(productData);


// // We only want who are active
// let users = [
//     {
//         userName : "Sachin",
//         isActive : true
//     },
//     {
//         userName: "Virat",
//         isActive: false
//     },
//     {
//         userName: "Rahul",
//         isActive: true
//     }
// ]

// let activeUsers = users.filter((user) => user.isActive).map(user => user.userName.toUpperCase())
// console.log(activeUsers);


// sort() this works unexpectedly.......check all the different ways how it works on numbers.

// structuring and destructuring
function myfun(){
    let data = ["Virat","Kohli",["Playing","Singing"]]
    return data;
}

let [fname,lname,[h1,h2]] = myfun();
console.log(fname, lname, h1, h2);
