import { Request, Response } from 'express';
import { IProduct } from './productInterface';
import { Products } from './productModel';

const addProductToDb = async (product: IProduct) => {
  const result = await Products.create(product);
  return result;
};
const getProductsFromDb = async () => {
  const result = await Products.find();
  return result;
};
const getSignleProductFromDb = async (id: string) => {
  const result = await Products.findById({ _id: id });
  return result;
};

export const ProductServices = {
  addProductToDb,
  getProductsFromDb,
  getSignleProductFromDb,
};
