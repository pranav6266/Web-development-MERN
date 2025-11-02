// We can also dynamically add new elements in a page.
function myfun(){
    let ele = document.createElement('p');
    ele.textContent = "My Paragraph";
    console.log(ele);
    
    // How to add this in the page? First add a div(container) then add it inside that or use body as the container.

    let inpEle = document.createElement("input");
    inpEle.setAttribute("type","email");
    console.log(inpEle);

    let btn = document.createElement("button");
    btn.textContent = "Button";

    let field = document.querySelector("#myField");
    field.append(ele);
    field.prepend(inpEle);
    field.append(btn);

    
};


function myfun2(){
    // This is how we create dynamic tables
    let table = document.createElement("table");
    console.log(table)
    table.setAttribute("border","2px");
    let row1 = table.insertRow();
    let col1 = row1.insertCell();
    let col2 = row1.insertCell();
    col1.textContent = "MyColumn1";
    col2.textContent = "MyColumn2";

    let field = document.querySelector("#myField");
    field.append(table);
}