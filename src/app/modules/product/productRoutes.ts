import express from 'express';
import { productController } from './ProductController';
import validateRequests from '../../middlewares/validateRequest';
import { productValidation } from './product.validation';
const router = express.Router();

router.post(
  '/create-product',
  validateRequests(productValidation.productZodSchema),
  productController.createProduct,
);
export const productRoutes = router;
