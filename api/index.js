const express = require('express');
const app = express();
const knex = require("knex")(
  require("./knexfile")[process.env.NODE_ENV || "development"]
);
const cors = require('cors');
const port = 8083;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    knex('movies_list').select('*')
    .then(data => res.send(data))
})  

app.get('/:id', (req, res) => {
    const { id } = req.params;
    knex('movies_list').select('*')
    .where({id:id})
    .then(data => res.send(data))
})  

app.post('/', (req, res) => {
    knex('movies_list').insert(req.body)
    .then(data => res.send({message: 'movie added'}))
})

app.patch('/:id', (req, res) => {
    const { id } = req.params;
    knex('movies_list')
        .where({ id:id })
        .update(req.body)
        .then(data => res.send({ message: 'movie upated' }))
        .catch(err =>
            res.status(404).json({
                message: 'The movie you are looking for could not be found'
            }))
})

app.delete('/:id', (req, res) => {
    const { id } = req.params;
    knex('movies_list')
        .where({ id:id })
        .delete(req.body)
        .then(data => res.send ({ message: 'Movie deleted' }))
        .catch(err => 
            res.status(404).json({
                message: 'movie not found, data not deleted'
            }))
})

app.listen(port, () => {
    console.log(`Express listening on port ${port}`)
  })
  
