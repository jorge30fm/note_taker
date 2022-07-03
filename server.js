const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

//import api and html routes
const apiRoutes = require('./routes/apiRoutes/notesRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//listen for any get, delete, or post requests
app.listen(PORT, () =>{
        console.log(`API server now on port ${PORT}!`);
})
