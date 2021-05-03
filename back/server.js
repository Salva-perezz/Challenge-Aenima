const express = require('express');
const app = express();
const db = require('./db');
const routes = require('./routes');
const PORT = 3001;

app.use(express.json());
app.use('/api', routes);

db.sync().then( () => {
    console.log('Database synchronized!');
    app.listen(PORT, () => {
        console.log(`Server listening port: ${PORT}`);
    });
});