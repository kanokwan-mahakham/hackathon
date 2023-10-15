const express = require('express');
const router = express.Router();
const Information = require('../models/informations')


router.get('/', async (req, res) => {
  const users = await Information.findAll();
  res.send(users);
});

router.get('/:id', async (req, res) => {
  const user = await Information.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(user);
});


router.post('/', async (req, res) => {
  const { name,description,profrileFile,image1,image2,image3,image4,image5,image6 } = req.body;
  const newUser = await Information.create({
    name,description,profrileFile,image1,image2,image3,image4,image5,image6
  });
  res.json(newUser);
});








module.exports = router;
