const Product = require("../models/Product");

const createProduct = async(req, res)=>{
    try{
        const {name, price, description, brand} = req.body;
        const images = req.files.map((image)=>image.filename);
    await Product.create({name, price, description, brand, images});
    return res.json({
        message: "Product created successfully"
    })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            message: "Product failed to create",
            error: error
        })
    }
};

const getAllProducts = async(req, res) =>{
    const products = await Product.find();
    const response = {
        data: products,
        total: products.length
    };
    return res.json(response);
};
const getProduct = async(req,res)=>{
    try{
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if(!product)return res.json;
    const response = {
        data: product
    };
    return res.json(response);
}catch(error){
    console.log(error)
    return res.status(400).json({
        message: "Product not found"
    });
}
};

const updateProduct = async(req, res)=>{
    const id = req.params.id;
    const {name, price, description, brand} = req.body;
        const images = req.files?.map((image)=>image.filename);

        const product = await Product.findById(id);
        if(!product){
            return res.status(400).json({
                message: "Product not found."
            });
        }
      
        if(images?.length > 0) {
             await Product.findByIdAndUpdate(id, {
                name, 
                price, 
                description, 
                brand, 
                images
            });
        } else{
           await Product.findByIdAndUpdate(id, {name, price, description, brand});
        }

        return res.json({
            message: "Product Updated Successfully"
        })
        
};
 const deleteProduct = async (req, res) => {
   try{
     const id = req.params.id;
     const product = await Product.findByIdAndDelete(id);
     return res.json({
      message: "Successfully deleted Product",
      product
     });
   }catch(error){
    console.log(error);
    return res.status(400).json({
        message: "Failed to delete product"
    });
   }
 };
module.exports={
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
};