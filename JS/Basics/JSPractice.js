function myFun(){
   let num = Number(prompt("Enter a number"));
   if(typeof(num) === "undefined" ){
       alert("Please enter a number");
   }else {
       alert("The entered number is " + (num % 2 === 0 ? "Even" : "Odd") );
   }

}