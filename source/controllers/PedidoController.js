const { response } = require('express');
const Order = require('../models/Pedido');

const create = async(req,res) => { //create
    try{
          const Order = await Order.create(req.body);
          return res.status(201).json({message: "Usuário cadastrado com sucesso!", Order: Order});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => { //acha todos
    try {
        const Orders = await Order.findAll();
        return res.status(200).json({Orders});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => { //acha um especifico
    const {id} = req.params;
    try {
        const Order = await Order.findByPk(id);
        return res.status(200).json({Order});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Order.update(req.body, {where: {id: id}});
        if(updated) {
            const Order = await Order.findByPk(id);
            return res.status(200).send(Order);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Usuário não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Order.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Usuário não encontrado.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};