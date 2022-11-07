const Seller = require('../models/seller');
const Product = require('../models/product');
const Admin = require('../models/admin');

module.exports.addProduct = async function(req,res){
    try{
        let product = await Product.create({
            imgpath: req.body.imgpath,
            name: req.body.name,
            price: req.body.price,
            desc: req.body.desc
        });
        let seller = await Seller.findById(req.params.id);
        seller.products.push(product);
        seller.save();
        return res.redirect('back');
    }catch(err){
        console.log('Error',err);
        return;
    }
}
