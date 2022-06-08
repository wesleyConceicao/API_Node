const { response } = require('express');
const User = require('../models/Usuario');

const create = async(req,res) => { //create
    try{
          const user = await User.create(req.body);
          return res.status(201).json({message: "Usuário cadastrado com sucesso!", user: user});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => { //acha todos
    try {
        const users = await User.findAll();
        return res.status(200).json({users});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => { //acha um especifico
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json({user});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await User.update(req.body, {where: {id: id}});
        if(updated) {
            const user = await User.findByPk(id);
            return res.status(200).send(user);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Usuário não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await User.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Usuário não encontrado.");
    }
};

//pedidos feitos pelo cliente 
const MakeOrder = async(req,res) => {
    const {id} = req.params;
    try{
        const MakeOrder = await User.findByPk(id);
        const OrderMaked = await User.findByPk(req.body.userId);
        await userMakeOrder.addFollowing(OrderMaked);
        return res.status(200).json(OrderMaked);
    }catch(err){
        return res.status(500).json("Pedido Feito");
    }
};
const Order = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const MakeOrder = await user.getMakerOrder({where = 0});
        return res.status(200).json({listOrder});
    }catch(err){
        return res.status(500).json({err});
    }
};

const DontOrder = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const userFollowed = await User.findByPk(req.body.userId);
        await user.removeProduct(userOrder);
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json("Você não tem nenhum pedido.");
    }
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    MakeOrder,
    Order,
    DontOrder
};