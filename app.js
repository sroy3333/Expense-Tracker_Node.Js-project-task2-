const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const signupRoute = require('./routes/signupRoute');

const app = express();
const port = 5000;

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(signupRoute);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'SignUp.html'));
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});