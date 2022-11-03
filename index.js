// Create an Express app
const express = require('express')
const app = express()
const port = 3000

// Create a variable that stores the last seen maximum, initialize it to 0
let lastMax = 0


// Create a variable that stores the correctAnswer, initialize it to 0
let correctAnswer = 0


// Create a route for your app that responds to GET requests at '/'
// by serving the 'index.html' file
app.get('/', (request, response) => {
  response.sendFile(__dirname + "/index.html")
})

// Create a route that responds to GET requests at routes that look
// like '/api/:x/:y'. See 'instructions.md' for details.
app.get('/api/:max/:guess', (request, response) => {
  const userMax = parseInt(request.params.max)
  const userGuess = parseInt(request.params.guess)
  // Check if the max is a new maximum
  if (userMax !== lastMax) {
    lastMax = userMax
    // Generate a new guess
    correctAnswer = Math.floor(Math.random() * lastMax + 1)
  }
  if(userGuess === correctAnswer) {
    response.send(true)
  } else {
  response.send(false)
    }
})

// app.get()
app.get('/api', (request, response) => {
  const userMax = parseInt(request.query.max)
  const userGuess = parseInt(request.query.guess)

  if (userMax !== lastMax) {
    lastMax = userMax
    // Generate a new guess
    correctAnswer = Math.floor(Math.random() * lastMax + 1)
  }
  if(userGuess === correctAnswer) {
    response.send(true)
  } else {
  response.send(false)
    }
  
})

// Make the app listen
app.listen(port)