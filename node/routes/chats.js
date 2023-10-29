const express = require('express');
const router = express.Router();
const Chat = require("../models/chats");


router.get('/', async (req, res) => {
  const products = await Chat.findAll();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await Chat.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(product);
});


router.post('/', async (req, res) => {
  const { room,sendId,message   } = req.body;
  const newProduct = await Chat.create({
    room,sendId,message 
  });
  res.json(newProduct);
});

router.delete('/:id', async (req, res) => {
  await Chat.destroy({
    where: {
      id: req.params.id
    }
  });
  res.sendStatus(204);
});




module.exports = router;

