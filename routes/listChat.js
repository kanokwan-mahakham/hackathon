const express = require('express');
const router = express.Router();
const ListChat = require("../models/listChats");


router.get('/', async (req, res) => {
  const listChats = await ListChat.findAll();
  res.send(listChats);
});

router.get('/:id', async (req, res) => {
  const listChat = await ListChat.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(listChat);
});


router.post('/', async (req, res) => {
  const { userId,companyId,room   } = req.body;
  const newListChats = await ListChat.create({
    userId,companyId,room
  });
  res.json(newListChats);
});

router.delete('/:id', async (req, res) => {
  await ListChat.destroy({
    where: {
      id: req.params.id
    }
  });
  res.sendStatus(204);
});

router.get("/findChat/:room", async (req, res) => {
  const { room } = req.params;
      const order = await ListChat.findOne({
        where: {
          room
        },
      });
      
      if (order) {
        res.json({ order });
      } 
      // else {
      //   res.status(404).json({ message: 'Order not found.' });
      // }
});




module.exports = router;

