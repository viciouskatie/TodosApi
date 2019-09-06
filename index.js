const express = require('express')
const app = express()
const port = 3000

app.get('/katharine', (req, res) => res.send(
    {
      name:'Katharine',
	  origin: 'female',
	  children: 2,
	  parents: 'crazy'

    }

))
	app.get('/', (req, res) => res.send(
    'hello world!'
    ))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
