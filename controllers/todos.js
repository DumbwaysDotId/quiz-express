//import connection to db
const connection = require('../db')


//make hardcode Array
const todos = [
    {
        id: 1,
        title: "Walking with Lola Zeita",
        isDone: true
    },
    {
        id: 2,
        title: "Sleeping with Lola Zeita",
        isDone: false
    },
]


exports.index = (req, res) => {
    connection.query('SELECT * FROM todos', (err, rows)=> {
        if (err) throw err
      
        res.send(rows)
    })    
}


exports.show = (req, res) => {
    connection.query(`SELECT * FROM todos WHERE id=${req.params.id}`, (err, rows)=> {
        if (err) throw err
      
        res.send(rows[0])
    })
}

exports.store = (req, res) => {
    const data = req.body
    todos.push(data)
    res.send(data)
}

exports.update = (req, res) => {
    const id = req.params.id
    const index = id - 1 
    const data = req.body    
    todos[index] = {...todos[index], ...data}
    res.send(todos[index])
}

exports.delete = (req, res) => {
    const id = req.params.id
    const index = id - 1        
    todos.splice(index, 1)
    res.send(todos)
}