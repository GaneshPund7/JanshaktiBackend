const express = require('express');
const router = express.Router();
const Task = require('../model/model');
const JobData = require('../model/jobModel');
const AdhodiData = require('../model/Adhodi');
const AkhatwadeData = require('../model/Akhatwade');

// List all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
router.get('/jobdata', async (req, res) => {
  try {
    const jobdata = await JobData.find();
    res.json(jobdata);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Adhodi Get Data 
router.get('/adhodiData', async (req, res) => {
  try {
    const adhodiData = await AdhodiData.find();
    res.json(adhodiData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
// Akhatwade Get data
router.get('/akhatwadeData', async (req, res) => {
  try {
    const akhatwadeData = await AkhatwadeData.find();
    res.json(akhatwadeData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


router.post('/jobdata', async (req, res) => {
  const { userName,SRNO,degree, mobile } = req.body;
  const jobdata = new JobData({ userName,SRNO,degree,mobile });
  await jobdata.save();
  res.json(jobdata);
});

// Create a new task
router.post('/tasks', async (req, res) => {
  const { userName,email, password } = req.body;
  const task = new Task({ userName,email, password });
  await task.save();
  res.json(task);
});

// Adhodi Data Post 
router.post('/adhodiData', async (req, res) => {
  const { villageName,
  taluka,villageTotalVotting,males,femails,maratha,muslim,dhangar,mali,dalit,vadar,
  laman,kumbhar,navhi,vanjari} = req.body;
  const task = new AdhodiData({ villageName,taluka,villageTotalVotting,males,femails,maratha,muslim,dhangar,mali,dalit,vadar,
    laman,kumbhar,navhi,vanjari });
  await task.save();
  res.json(task);
});
// Akhatwade PostData api
router.post('/akhatwadeData', async (req, res) => {
  const { villageName,
    taluka,villageTotalVotting,males,femails,maratha,muslim,dhangar,mali,dalit,vadar,
    laman,kumbhar,navhi,vanjari} = req.body;
  const task = new AkhatwadeData({ villageName,taluka,villageTotalVotting,males,femails,maratha,muslim,dhangar,mali,dalit,vadar,
    laman,kumbhar,navhi,vanjari});
  await task.save();
  res.json(task);
});


// Update a task
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    task.title = title;
    task.description = description;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndRemove(id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
