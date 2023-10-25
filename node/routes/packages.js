const express = require('express');
const router = express.Router();
const Package = require("../models/packages")


router.get('/', async (req, res) => {
  const products = await Package.findAll();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await Package.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(product);
});


router.post('/', async (req, res) => {
  const { companyId,slip,status,dayStart,dayEnd } = req.body;
  const newProduct = await Package.create({
    companyId,slip,status:"waiting",dayStart,dayEnd
  });
  res.json(newProduct);
});

router.delete('/:id', async (req, res) => {
  await Package.destroy({
    where: {
      id: req.params.id
    }
  });
  res.sendStatus(204);
});





module.exports = router;

