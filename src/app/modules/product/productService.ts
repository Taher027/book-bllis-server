import { Request, Response } from 'express'
import { IProduct } from './productInterface'
import { Produc } from './productModel'

const createProdcutToDb = async (product: IProduct) => {
  const result = await Produc.create(product)
  return result
}

export const ProductService = {
  createProdcutToDb,
}
