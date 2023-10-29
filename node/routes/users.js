const express = require('express');
const router = express.Router();
const User = require('../models/users')
const CustomerFav = require("../models/customerFavs")


router.get('/', async (req, res) => {
  const users = await User.findAll();
  users.sort((a, b) => b.pack - a.pack); // เรียงจากมากไปน้อย
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
  const { username,email,password,type,juristicNumber,JuristicFile,status,informationId,pack } = req.body;
  const newUser = await User.create({
    username,email,password,type,juristicNumber,JuristicFile,status,informationId,pack
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

router.put('/:id', async (req, res) => {
  const { username,email,password,type,juristicNumber,JuristicFile,status,informationId,pack } = req.body;
  const information = await User.findOne({
    where: {
      id: req.params.id
    }
  });

    information.username = username;
    information.email = email;
    information.password = password;
    information.type = type;
    information.juristicNumber = juristicNumber;
    information.JuristicFile = JuristicFile;
    information.status = status;
    information.informationId = informationId;
    information.pack = pack;
    
  await information.save();

  res.json(information);
});


module.exports = router;
