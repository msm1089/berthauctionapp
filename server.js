const express = require('express');
require('dotenv').config(); // for loading environment variables
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const users = require('./routes/api/users');
const vessels = require('./routes/api/vessels');

const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db configuration
const MONGO_URI = require('./config/keys').mongoURI;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongo Connection successful'))
  .catch((err) => console.log('err'));

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

app.use(passport.initialize());
require('./middleware/passport')(passport);
app.use('/api/users', users);
app.use('/api/vessels/', vessels);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
