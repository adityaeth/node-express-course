const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
]

app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got user. Nice!',
        users: mockUserData
    })
})

app.get('/test', (req, res) => {
    console.log("Test is working fine");
    res.json({
        success: true,
        message: "Test passed"
    })
})

app.get('/users/:id', function (req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login', function (req, res) {
    const userName = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyThekid";
    const mockPassword = "superSecret";

    if (userName == mockUsername && password == mockPassword) {
        res.json({
            success: true,
            message: 'username and password matched!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})
app.listen(8000, function () {
    console.log("Server is listenning..");
})