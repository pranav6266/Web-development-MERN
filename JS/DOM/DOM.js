//  DOM (Document Object Model) -> handled by browser, it is an API for manipulating HTML docs.
// When we represent all the HTML elements as nodes in a tree.
// DOM provides functions that allow you to add, remove, and modify parts of the document effectively.
// DOM is a cross-platform and language-independent way of manipulating HTML and XML documents.


// // This is one method getElementById which is used to access HTML element
// let p = document.getElementById("myP");
// console.log(p);
// console.log(p.textContent);
// p.textContent = "My Paragraph...";


// // Event Handling (for onclick)
// function myfun(){
//     alert("Hello World!!")
// };

// // Now we will get the element and change the content on click
// function myfun(){
//     let ele = document.getElementById("myP");
//     alert(ele.textContent)
//     ele.textContent = "Changed content......";
// };


// Now we will change the style on click
function myfun(){
    let ele = document.getElementById("myP");
    alert(ele.textContent);
    ele.textContent = "Changed content........";
    ele.style.color = "red";
    // Changing background color
    ele.style.backgroundColor = "yellow";
    ele.style.padding = "20px";
    ele.style.lineHeight = "80px";
    ele.style.textAlign = "center";
}

// Using CSS with classes
function myfun2(){
    let ele = document.getElementById("myH");
    // This classList is used to get all the classes assigned to an element.
    let clsList = ele.classList;
    // This is used to add a class to element
    clsList.add("fancy-heading");
    console.log(clsList);

    // We can also do it with condition
    
    if (clsList.contains("clsA")){
        clsList.remove("")
    }
};

