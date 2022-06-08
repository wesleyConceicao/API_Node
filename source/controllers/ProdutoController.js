const { response } = require('express');
const Product = require('../models/Produto');

const create = async(req,res) => { //create
    try{
          const Product = await Product.create(req.body);
          return res.status(201).json({message: "Usuário cadastrado com sucesso!", Product: Product});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => { //acha todos
    try {
        const Products = await Product.findAll();
        return res.status(200).json({Products});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => { //acha um especifico
    const {id} = req.params;
    try {
        const Product = await Product.findByPk(id);
        return res.status(200).json({Product});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Product.update(req.body, {where: {id: id}});
        if(updated) {
            const Product = await Product.findByPk(id);
            return res.status(200).send(Product);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Usuário não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Product.destroy({where: {id: id}});
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