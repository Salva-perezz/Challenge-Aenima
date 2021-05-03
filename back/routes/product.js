const Router = require('express').Router();
const { Product } = require('../models');

/* Ruta para traer todos los productos */
Router.get('/', (req, res) => {
    Product.findAll()
    .then(products => {
        res.status(200).json(products);
    }).catch(err => {
        res.status(500).json(err);
    });

});

/* Ruta para crear un producto */
Router.post('/', (req, res) => {
    Product.create(req.body).then(createdProduct => {
        res.status(201).json(createdProduct);
    }).catch(err  => {
        console.log(err);
        res.status(500).json(err);
    });
});

/* Ruta para traer un producto en especifico */
Router.get('/:id', (req, res) => {
    const id = req.params.id;

    Product.findByPk(id).then(product => {
        res.status(200).json(product);
    }).catch(err  => {
        res.status(500).json(err);
    });
});

/* Ruta para eliminar un producto */
Router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    await Product.destroy({
        where: {
            id: id
        }
    });

    res.sendStatus(200)
});

/* Ruta para modificar un producto */
Router.put('/', async (req, res) => {
    const id = req.body.id;

    await Product.update(req.body, {
        where: {
            id: id
        }
    }).catch(err => {
        console.log(err)
    });

    res.sendStatus(200)
});

module.exports = Router;