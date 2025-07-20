import { Request, Response } from 'express';
import { ProductServices } from './productService';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { log } from 'console';

const addProduct = catchAsync(async (req, res) => {
  const book = req.body;
  const data = await ProductServices.addProductToDb(book);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'product create successfull',
    data: data,
  });
});
const getProducts = catchAsync(async (req, res) => {
  const data = await ProductServices.getProductsFromDb();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Products fetched successfully',
    data: data,
  });
});
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await ProductServices.getSignleProductFromDb(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product fetched successfully',
    data: data,
  });
});
export const productControllers = {
  addProduct,
  getProducts,
  getSingleProduct,
};
