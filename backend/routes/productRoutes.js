import express from 'express'
const router = express.Router();
import { createProduct, deleteproduct, getallproducts,getproductbyid,updateproduct } from '../controller/productController.js';

//routes
router.post('/create',createProduct)
router.get('/getall',getallproducts);
router.route('/update/:id').put(updateproduct)
router.route('/delete').delete(deleteproduct)
router.route('/getproductbyid/:id').get(getproductbyid);

export default router;