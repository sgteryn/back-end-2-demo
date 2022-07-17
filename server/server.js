//bringing in packages

const express = require('express')
const cors = require('cors')
const {getAllMovies, 
       createMovie,
       deleteMovie,
        editMovie} = require('./controller')

// //temp database moved to controller file
// const movies = require('./db.json')

//initializing new app with express
const app = express()

//middleware
app.use(express.json())
app.use(cors())

//get endpoint to all movies
app.get('/api/movies',getAllMovies)

// let globalId = 11  -- moved to controller file

//delete endpoint to delete movie 
app.delete('/api/movies/:id',deleteMovie)

//post endpoint to create a new movie 
app.post('/api/movies',createMovie)

//put  endpoint to edit the movie
app.put('/api/movies/:id',editMovie)

const SERVER_PORT = 4004
app.listen(SERVER_PORT,() => console.log(`server runnin on ${SERVER_PORT}`))