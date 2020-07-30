![License badge](https://img.shields.io/badge/license-MIT-green)

# note_taker

This is an app that can be used to write, save, and delete notes. 
This application will use an express backend and save and retrieve note data from a JSON file.

## Description


* The following HTML routes are created:

  * GET `/notes` - returns the `notes.html` file.

  * GET `/` -  returns the `index.html` file

* The application have a `db.json` file on the backend that is used to store and retrieve notes using the `fs` module.

* The following API routes created:

  * GET `/api/notes` -  reads the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - receives a new note to save on the request body, added it to the `db.json` file, and then returned the new note to the client.

  * DELETE `/api/notes/:id` -  receives a query parameter containing the id of a note to delete. When each note is saved they have got a unique `id`. In order to delete a note,  all notes is read from the `db.json` file, and removed the note with the given `id` property, and then rewrote the notes to the `db.json` file.

## User Story
```
AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

```

## Table of Content
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#Licence)
4. [Contribution](#Contribution)
5. [Questions](#Questions)
6. [StartBy](#StartBy)
7. [VideoLink](#VideoLink)

## Installation
The dependencies are [express](https://expressjs.com/). Install the packages/dependencies by hitting following command on your terminal console:-
```
npm install

```


## Usage

```
For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.
```

## License

```
This is MIT license

```

## Contribution

```
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owner of this repository before making a change.
```

# Questions
 <a href="https://github.com/marasinipradeep">Github Url : https://github.com/marasinipradeep</a>

 <a href="marasinipradeep@gmail.com">Email : marasinipradeep@gmail.com</a>

 ## StartBy

First of all, Clone the project from github to local machine.Alternatively, you can download the .zip file and extract in suitable folder on local machine.Open the file with suitable code editor (For examplle:-Visual Studio code, Sublime Text, Atom etc).Make sure you have installed all the dependencies.Run the file simply typing node server.js on code editor console.And typing localhost:3000 on browser.


## VideoLink
<a href= "https://www.youtube.com/watch?v=qxuPqlNNJaI&feature=youtu.be">Click here for demo video link</a>

## Live Url
<a href= "https://notetakerexpresspradeep.herokuapp.com/">Click here for live url</a>

```
Note :- To view this readme.md file in neat and cleaner view.On the top of header of README.md right click and click on open preview.
```
