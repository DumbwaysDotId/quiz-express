//Init Group Route
require("express-group-routes")
//instantiate express module
const express = require('express')
//use express in app variable
const app = express()
//define the server port
const port = 5000
//Init Body parser
const bodyParser = require('body-parser')


//import controllers todos.js
const TodosControllers = require('./controllers/todos')

app.use(bodyParser.json())




app.group("/api/v1", (router) => {

//Get list route simply send arr of obj todos on your user screen
//Ngambil Array Diatas

//router.get('/endpoint', controller.naming_func)

router.get('/todos', TodosControllers.index)

//GET detail route: send the todo obj, by received id request params
//Ngambil Data Array nya lebih spesifik atau 1 data.
router.get('/todo/:id', TodosControllers.show)


//POST route: receive json body request, from user input, then push to todos array
//Masukan Data Lola
router.post('/todo', TodosControllers.store)


//PATCH route: receive json body request, from user input, then push to todos array
//by object id
//Edit Data
router.patch('/todo/:id', TodosControllers.update)


//DELETE route: delete the todo obj, by received id request params
router.delete('/todo/:id', TodosControllers.delete)

})


//create the homepage route
app.get('/', (req, res) => {
    //res means, response, and it send string "Hello Express!" to the API
    res.send('Batch 13 Ganteng Semua')
})    

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))
