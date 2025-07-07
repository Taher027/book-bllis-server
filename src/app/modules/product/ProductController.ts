import { Request, Response } from 'express';
import { ProductService } from './productService';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createProduct = catchAsync(async (req, res) => {
  const product = req.body;
  const data = await ProductService.createProdcutToDb(product);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'product create successfull',
    data: data,
  });
});

export const productController = {
  createProduct,
};
