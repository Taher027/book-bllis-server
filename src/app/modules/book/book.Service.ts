import { Request, Response } from 'express';
import { IBook } from './book.Interface';
import { Books } from './book.Model';

const addBookToDb = async (product: IBook) => {
  const result = await Books.create(product);
  return result;
};
const getBooksFromDb = async () => {
  const result = await Books.find();
  return result;
};
const getSignleBookFromDb = async (id: string) => {
  const result = await Books.findById({ _id: id });
  return result;
};

export const bookServices = {
  addBookToDb,
  getBooksFromDb,
  getSignleBookFromDb,
};
