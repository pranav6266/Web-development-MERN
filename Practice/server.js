const express = require("express");
const app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    console.log("here");
    res.render("index",{text :"Pranav"});
});

app.listen(3000);

const userRouter = require("./routes/users");
app.use("/users", userRouter)