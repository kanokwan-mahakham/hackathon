const express = require('express');
const router = express.Router();

const Products = require("../models/products")


router.get('/', async (req, res) => {
  const products = await Products.findAll();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await Products.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(product);
});


router.post('/', async (req, res) => {
  const { productId,companyId,name,description,image,typeCompany,typeProduct,service,quantity,price } = req.body;
  const newProduct = await Products.create({
    productId,companyId,name,description,image,typeCompany,typeProduct,service,quantity,price,
  });
  res.json(newProduct);
});

router.delete('/:id', async (req, res) => {
  await Products.destroy({
    where: {
      id: req.params.id
    }
  });
  res.sendStatus(204);
});





module.exports = router;

