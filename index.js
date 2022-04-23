const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Heeyyyyy yea read 676');
});

const users = [
    { id: 1, name: 'kabila alim', job: 'khai khai' },
    { id: 2, name: 'Bristi alim', job: 'khai khai' },
    { id: 3, name: 'Sahana alim', job: 'khai khai' },
    { id: 4, name: 'Misti alim', job: 'khai khai' },
    { id: 5, name: 'Shuvo alim', job: 'khai khai' },
];

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter((user) => user.name.toLowerCase().includes(search));
        res.send(matched)
    } else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.listen(port, () => {
    console.log(`Example ${port}`);
});
