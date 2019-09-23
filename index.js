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

let katvar = "Katharine"
app.get('/', (req, res) => res.send(
    `Hello ${katvar}`
))

app.get('/todos/:id', (req, res) => {
    console.log('params', req.params)
    let item = data.find(item => item.id === parseInt(req.params.id))
    res.send(
        item
    )
})
app.get('/todos', (req, res) => {
    // This uses a query param... so
    // it looks like this in the url...
    // http://localhost:3000/todos?todo_name=Optional
    console.log('query', req.query)
    let item = data.find(item => item.todo_name === (req.query.todo_name))
    res.send(
        item
    )
})


// Map, filter, reduce, sort, findByIndex, find, slice, push, indexOf


app.get('/todos/filter/:id', (req, res) => {
    console.log('params', req.params)
    let item = data.filter((item) => item.id >= parseInt(req.params.id))
    res.send(
        item
    )
})

/* I separated the function just to make it clear, then added it as the second argument */
/* This creates a new route at localhost:3000/todos and returns a giant list of todos */
app.get('/todos', getTodos)

function getTodos(req, res) {
    res.send(data)
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))




