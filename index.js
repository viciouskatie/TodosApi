const express = require('express')
const app = express()
const port = 3000
const data = require('./MOCK_DATA')

app.get('/katharine', (req, res) => res.send(
    {
        name: 'Katharine',
        origin: 'female',
        children: 2,
        parents: 'crazy'

    }

))

app.get('/', (req, res) => res.send(
    'hello world!'
))

/* I separated the function just to make it clear, then added it as the second argument */
/* This creates a new route at localhost:3000/todos and returns a giant list of todos */
app.get('/todos', getTodos)

function getTodos(req, res){
    res.send(data)
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
