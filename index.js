import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app=express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) =>{
  res.render("index.ejs");
});

app.get("/user-login",(req,res) =>{
  res.render("dash.ejs");
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
