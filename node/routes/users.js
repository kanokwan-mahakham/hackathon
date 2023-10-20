const express = require('express');
const router = express.Router();
const User = require('../models/users')
const CustomerFav = require("../models/customerFavs")


router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

router.get('/:id', async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(user);
});


router.post('/', async (req, res) => {
  const { username,email,password,type,juristicNumber,JuristicFile,status,informationId } = req.body;
  const newUser = await User.create({
    username,email,password,type,juristicNumber,JuristicFile,status,informationId
  });
  res.json(newUser);
});

router.get('/:username/:password', async (req, res) => {
  const { username,password } = req.params;
    const user = await User.findOne({
      where: {
        username,password
      },
    });
    
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ message: 'Order not found.' });
    }
  
});




module.exports = router;
