import express from 'express';
import { productControllers } from './ProductController';
import validateRequests from '../../middlewares/validateRequest';
import { productValidation } from './product.validation';
const router = express.Router();

router.post(
  '/add-product',
  validateRequests(productValidation.productZodSchema),
  productControllers.addProduct,
);
router.get('/:id', productControllers.getSingleProduct);
router.get('/', productControllers.getProducts);
export const productRoutes = router;
