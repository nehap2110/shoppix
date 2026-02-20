import Product from "../models/product.js"
import HandleError from "../utils/handleError.js";
import handleAsyncError from "../middleware/handleAsyncError.js";
import APIFunctionality from "../utils/apiFunctionality.js";

//create a product
export const createProduct = handleAsyncError(async(req,res,next)=>{
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            success:true,
            product
        });
        
    } catch (error) {
        console.log("error in product creation:",error)
    }
})

//get all products
export const getallproducts =  handleAsyncError(async(req,res,next)=>{

    console.log("req query:",req.query);
  const apiFunctionality =  new APIFunctionality(Product.find(),req.query).search().filter();
  console.log(apiFunctionality)



    const products = await apiFunctionality.query
    res.status(200).json({
        message:'all products'
    })
})

//update product by id
export const updateproduct = handleAsyncError(async(req,res,next)=>{
    try {
        const productid = req.params.id;
        const product = await Product.findById(productid);

        //validation
        if(product === null) {
            return next(new HandleError("product not found",404))
        }
        const updatedproduct = await Product.findByIdAndUpdate(productid,req.body,{
            new :true,
            runValidators:true
        })
        res.status(200).json({
            success:true,
            updatedproduct
        })
    } catch (error) {
        console.log("error in updating product:",error);
        res.statu(500).json({
            success:false,
            message:'error in updation'
        })
    }
})

//delete product
export const deleteproduct =handleAsyncError( async(req,res,next)=>{
    try {
        
       const product = await Product.findByIdAndDelete(req.params.id);
         if(!product){
            return next(new HandleError("product not found",404))
        }

        res.status(200).json({
            success:true,
            message:'product deleted successfully'
        })
        
    } catch (error) {
        console.log("error:",error);
        res.status(500).json({
            success:false,
            message:"error in product deletion"
        })
    }
})
//get single product
export const getproductbyid = handleAsyncError(async(req,res,next)=>{
    try {
        const product=await Product.findById(req.params.id);
        if(!product){
            return next(new HandleError("product not found",404))
        }
        res.status(200).json({
            success:true,
            message:'get the product successfully'
        })
        
    } catch (error) {
        console.log("error in fetching product:",error);
        res.status(500).json({
            success:false,
            message:'error in fetching single product'
        })
    }
})