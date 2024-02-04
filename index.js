import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"food"
})

// If ther is a auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysq_native_password BY 'root'
app.get("/",(reg,res)=>{
    res.json("hello this is the backend")
})

app.get("/food",(reg,res)=>{
    const q = "SELECT * FROM food"
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/food", (req,res)=>{
    const q = "INSERT INTO food ('name','type') VALUES (?)"
    const values = ["name from backend", "type from backend"]

    db.query(1,[values], (err,data)=>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8800, ()=> {
    console.log('connected to backend')
})