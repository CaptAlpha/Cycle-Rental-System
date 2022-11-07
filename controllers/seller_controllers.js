const Seller = require('../models/seller');
const Product = require('../models/product');
// create session
module.exports.createSession = function(req, res){
    return res.redirect('/');
}

// destroy session
module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/');
}

// create user
module.exports.create = function(req,res) {
    if (req.body.password != req.body.cpassword) {
        return res.redirect('back');
    }

    Seller.findOne({email: req.body.email}, function(err,user) {
        if (err) {
            console.log('Error in finging user -> Sign Up',err);
            return res.redirect('back');
        }
        if (user) {
            return res.render('login');
        }
        Seller.create(req.body, function(err, user){
            if(err){req.flash('error', err); return}
            
            return res.render('login');
        })
    })
}

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


