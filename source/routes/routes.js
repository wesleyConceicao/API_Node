const { Router } = require('express');
const Usuario = require('../models/Usuario');
const Produto = require('../models/Produto');
const Pedido = require('../models/Pedido');

const UsuarioController = require('../controllers/UsuarioController');
const ProdutoController = require('../controllers/ProdutoController');
const PedidoController = require('../controllers/PedidoController');

const router = Router();

router.get('/usuario', UsuarioController.index) 
router.get('/usuario/:id', UsuarioController.show) 
router.post('/usuario', UsuarioController.create) 
router.put('/usuario/:id', UsuarioController.update) 
router.delete('/usuario', UsuarioController.destroy) 

router.get('/produto', ProdutoController.index) 
router.get('/produto/:id', ProdutoController.show) 
router.post('/produto', ProdutoController.create) 
router.put('/produto/:id', UsuarioController.update) 
router.delete('/produto', UsuarioController.destroy) 

router.get('/pedido', PedidoController.index) 
router.get('/pedido/:id', PedidoController.show) 
router.post('/pedido', PedidoController.create) 
router.put('/pedido/:id', PedidoController.update) 
router.delete('/pedido', PedidoController.destroy) 

module.exports = router;