const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');


const app = express();

require('./routes/authRoutes')(app);


const PORT = process.env.PORT
app.listen(PORT);