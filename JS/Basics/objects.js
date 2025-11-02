// // OBJECTS
// // always within flower bracket.
// // always in key (name) : value pair.
// // first use name of object, then after a "." access all the fields.
// // values can be of different types like string, numbers, arrays etc...

// let userData = {
//     userName : "Sachin",
//     userGender : "Male",
//     userAge : 45
// };

// console.log(userData);

// console.log(userData.userName);

// userData.userAge = 50;
// console.log(userData);

// // What happens if we try to access the field which is not present?
// // We will get "undefined" if we try to access it.
// // If we try to change it, it will get added to the object.



// // We can add myfun() to the userData object by writing it into a field called fn.
// function myfun(){
//     console.log("Hello World!!!");
    
// }

// userData.fn = myfun;
// userData.fn();


// // We can directly declare a function for a field value in objects directly.
// let userData2 = {
//     userName: "Sachin",
//     userGender: "Male",
//     userAge: 45,
//     fn : function(){
//         console.log("Hello World!!!!");
        
//     },
//     // Easier method to create a function
//     fn2(){
//         console.log("Function 2 calling......");
        
//     }
// };
// userData2.fn();
// userData2.fn2();


// I want to use the members of the object in the function. We will use "this" keyword.
// This keyword refers to the current objects. It also depends on how it is used(changes accordingly).
// * If it is used inside object method, it refers to object.
// * If it is used alone, outside the object, it gives Global Object(Window Object)
// * In a function (which is outside the object), then this also refers to the Global object.
// * In an event, this refers to HTML element that recieved the event.
let userData2 = {
    userName: "Sachin",
    userGender: "Male",
    userAge: 45,
    fn : function(){
        console.log(this.userName);
        
    },
    // Easier method to create a function
    fn2(){
        console.log(this.userName);
        
    }
};

userData2.fn();
userData2.fn2();