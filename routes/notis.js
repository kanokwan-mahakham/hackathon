const express = require('express');
const router = express.Router();
const Noti = require("../models/notis");


router.get('/', async (req, res) => {
  const products = await Noti.findAll();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await Noti.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(product);
});


router.post('/', async (req, res) => {
  const { companyId,icon,type,description,   } = req.body;
  const newProduct = await Noti.create({
    companyId,icon,type,description,
  });
  res.json(newProduct);
});

router.delete('/:id', async (req, res) => {
  await Noti.destroy({
    where: {
      id: req.params.id
    }
  });
  res.sendStatus(204);
});




module.exports = router;

