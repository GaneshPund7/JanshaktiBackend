const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userName: String,
  SRNO: String,
  degree: String,
  mobile: String,


  userName:{
    type: String,
    require : true,
  },
  SRNO:{
    type: String,
    require : true,
  },
  degree: {
    type: String,
require : true,
  },
  mobile: {
    type: String,
require : true,
  }, 
});

module.exports = mongoose.model('RashtravadiData', taskSchema);
