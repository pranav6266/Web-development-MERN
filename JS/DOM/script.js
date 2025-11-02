// // let head = document.querySelector("h2");
// // let appendedHead = " from Apna College Studendts";
// // head.innerText = head.innerText + appendedHead;
//
// let divs = document.querySelectorAll(".box");
// // divs[0].innerText = "Yellowwwwwwwww"
// // divs[2].innerHTML = "<h1><b>Yeee Haaww</b></h1>"
// // divs[1].innerHTML = "<i>Yup that's me ......the first node.....ha ha ha</i>"
//
// let index = 1;
// for(div of divs){
//     div.innerText = `new unique value ${index}`;
//     index++;
// }

let counter = 0;
function func1(){
    counter++;
    console.log(`Button  Clicked ${counter} times!`);
}

function func2(){
    let tab = document.createElement("table");
    let row1 = tab.insertRow();
    let col1 = row1.insertCell()
    col1.textContent = "My Column";
    let col2 = row1.insertCell();
    let f = document.getElementById("box");
    tab.setAttribute("border","2px");
    tab.setAttribute("width", "400px");
    tab.setAttribute("align","center")
    f.append(tab);

    console.log(tab);

}
