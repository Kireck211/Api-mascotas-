const express = require('express');
const path = require('path');
const animalsRouter = require('./routes/animalRoute');
const speciesRouter = require('./routes/speciesRoute');
const intakereasonRouter = require('./routes/reasonRoute');

const app = express();
app.use(express.json());

app.use('/animals',animalsRouter);
app.use('/species',speciesRouter);
app.use('/intakereason',intakereasonRouter);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Listening on port 3000'));


 