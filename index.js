const express = require('express');
const path = require('path');
const animalsRouter = require('./routes/animalRoute');
//const speciesRouter = require('./routes/species');
//const intakereasonRouter = require('./routes/intakereason');

const app = express();
app.use(express.json());
app.use('/animals',animalsRouter);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Listening on port 3000'));


 