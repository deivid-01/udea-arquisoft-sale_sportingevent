const express = require('express');
const app = express ();
const morgan = require('morgan');
const {mongoose} = require('./database');
const cors = require('cors');

//Settings 
app.set('port', process.env.PORT || 3000 );

//Midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/events',require('./routes/sportingevents.routes'));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000', app.get('port'));
});

