const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  villageName: String,
  taluka: String,
  villageTotalVotting: String,
  males: String,
  femails: String,
  maratha: String,
  muslim: String,
  vanjari: String,
  dhangar: String,
  mali: String,
  dalit: String,
  vadar: String,
  laman: String,
  kumbhar: String,
  navhi: String,


  villageName:{
    type: String,
    require : true,
  },
  taluka:{
    type: String,
    require : true,
  },
  villageTotalVotting: {
    type: String,
require : true,
  },
  males: {
    type: String,
require : true,
  }, 
  femails: {
    type: String,
require : true,
  }, 
  maratha: {
    type: String,
require : true,
  }, 
  muslim: {
    type: String,
require : true,
  }, 
  dhangar: {
    type: String,
require : true,
  }, 
  mali: {
    type: String,
require : true,
  }, 
  dalit: {
    type: String,
require : true,
  }, 
  vadar: {
    type: String,
require : true,
  }, 
  laman: {
    type: String,
require : true,
  }, 
  kumbhar: {
    type: String,
require : true,
  }, 
  navhi: {
    type: String,
require : true,
  }, 
});

module.exports = mongoose.model('Adhodi', taskSchema);
