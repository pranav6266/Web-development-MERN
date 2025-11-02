const users = [
    {
        id:1001,
        name:"Pranav",
    },
    {
        id:1002,
        name:"Sachin",
    },
    {
        id:1003,
        name:"Virat",
    }
]

function myfun(){
    let ul = document.createElement("ul");
    users.forEach((user)=>{
        let li = document.createElement("li");
        li.textContent = user.name;
        ul.append(li);

        document.body.append(ul);
        })
    console.log(ul);
}