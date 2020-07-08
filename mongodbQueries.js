var mongoose = require('mongoose');

// var MONGO_URI = require('./config/keys').mongoURI;
var MONGO_URI = 'mongodb://msm1089:msm1089@ds149865.mlab.com:49865/bloggy';

var Schema = mongoose.Schema;

var vessel = {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  length: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  depth: {
    type: String,
    required: true,
  },
  operator: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
};

var VesselSchema = new Schema(vessel);
var Vessel = mongoose.model('vessels', VesselSchema);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var NewVessel = {
  name: 'Speedboat1000',
  description: 'A very fast boat!',
  length: '5',
  weight: '10',
  depth: 1,
  operator: 'Speedy',
  date: new Date(),
};

var newVessel = new Vessel(vessel);

newVessel.save();
var savedVessel = Vessel.find();
console.log(savedVessel);
