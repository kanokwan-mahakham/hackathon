const express = require('express');
const router = express.Router();
const Package = require("../models/packages");
const { NOW } = require('sequelize');


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
  const { companyId,slip,status,timeEnd,dayEnd } = req.body;
  const newProduct = await Package.create({
    companyId,slip,status:"waiting",timeEnd,dayEnd
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

router.get("/delete/:dayEnd", async (req, res) => {

  try{
    const { dayEnd } = req.params;
      const order = await Package.findOne({
        where: {
           dayEnd
        },
      });
      
      if (order) {
        res.json({ order });
      } else {
        res.status(404).json({ message: 'Package not found.' });
      }
  }catch(error){
    console.error(error)
  }
 
    
 
});





module.exports = router;

