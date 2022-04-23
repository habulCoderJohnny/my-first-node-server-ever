const express = require('express');
const cors = require('cors'); //SENT form DATA request to server step#3
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()) //add CORS2
app.use(express.json()); //error solve by middleware| form DATA request to server step#5
// route/api/endpoint
app.get('/', (req, res) => {
    res.send('Yay! finally i am coming node mamma!!')
});
const users = [
    { id: 101, name: 'halima', email: 'mrhalim@jhc.com', phone: '+88017111111' },
    { id: 102, name: 'halima2', email: 'mrhalim2@jhc.com', phone: '+8801722222' },
    { id: 103, name: 'halima3', email: 'mrhalim3@jhc.com', phone: '+8801788888' },
    { id: 104, name: 'halima4', email: 'mrhalim4@jhc.com', phone: '+8801733333' },
    { id: 105, name: 'halima5', email: 'mrhalim5@jhc.com', phone: '+8801744444' },
    { id: 106, name: 'halima6', email: 'mrhalim6@jhc.com', phone: '+8801755555' },
    { id: 107, name: 'halima7', email: 'mrhalim7@jhc.com', phone: '+8801777777' },
]
app.get('/users', (req, res) => {
    //filter by Search query parameter
    if (req.query.name) {   
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parse(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    res.send(user);
});

// post Route |  SENT form DATA request to server step#4
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1; //newuser show to Ui step#1
    users.push(user);
    res.send(user);
});


/* const fruits = ['mango', 'date', 'banana', 'watermelon']
app.get('/fruits', (req, res) => {
    res.send(fruits);
})

app.get('/vegetarian/meatarian/', (req, res) => {
    res.send('vegetarian vs meatarian');
})

 */
app.listen(port, () => {
    console.log('listening to port', port);
})

