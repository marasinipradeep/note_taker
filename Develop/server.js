const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
//let DB = require("./db/db.json")
const uuid = require("uuid/v4")

//Port listen on
const PORT = process.env.PORT || 3000

//Reading static file inside public folders
app.use(express.static(__dirname + '/public'));

//Body parsor
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


//return the index.html file
app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/public/index.html")))

//return the notes.html file. 
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname + "/public/notes.html")))


//API for renderning  notes stored on db
app.get("/api/notes", (req, res) => {

   res.sendFile(path.join(__dirname, "/db/db.json"))
})

//API for storing user added note and renderning updated  notes stored on db.json
app.post("/api/notes", (req, res) => {
    let newNote ={
        id:uuid(),
        title:req.body.title,
        text:req.body.text
    };

    let oldNote =JSON.parse(fs.readFileSync(path.join(__dirname,"./db/db.json"),"utf-8")) 
    oldNote.push(newNote)
    fs.writeFileSync("./db/db.json",JSON.stringify(oldNote))
    res.json(oldNote)
})

//receive a query parameter containing the id of a note to delete.
app.delete("/api/notes/:id", (req, res) => {
    let choosen = req.params.id
    let oldNote =JSON.parse(fs.readFileSync(path.join(__dirname,"./db/db.json"),"utf-8"))
    const newNote =oldNote.filter(oldNote=>oldNote.id != choosen)
    fs.writeFileSync("./db/db.json",JSON.stringify(newNote))
    res.send(newNote)
})

//Port listening on
app.listen(PORT, () => {
    console.log(`PORT Listening ON ${PORT}`)
})
