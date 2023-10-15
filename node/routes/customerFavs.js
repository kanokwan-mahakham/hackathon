const express = require('express');
const router = express.Router();
const CustomerFav = require('../models/customerFavs')


router.get('/', async (req, res) => {
  const userFavs = await CustomerFav.findAll();
  res.send(userFavs);
});

router.get('/:id', async (req, res) => {
  const userFav = await CustomerFav.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(userFav);
});

router.post('/', async (req, res) => {
  const { customerId,companyId } = req.body;
  const newFav = await CustomerFav.create({
    customerId,companyId
  });
  res.json(newFav);
});

router.get('/:customerId/:companyId', async (req, res) => {
  const { customerId,companyId } = req.params;
    const user = await CustomerFav.findOne({
      where: {
        customerId,companyId
      },
    });
    
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ message: 'Order not found.' });
    }
  
});

router.delete('/:id', async (req, res) => {
  await CustomerFav.destroy({
    where: {
      id: req.params.id
    }
  });
  res.sendStatus(204);
});





module.exports = router;
