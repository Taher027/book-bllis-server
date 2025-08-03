import { Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { log } from 'console';
import { bookServices } from './book.Service';

const addBook = catchAsync(async (req, res) => {
  const book = req.body;
  const data = await bookServices.addBookToDb(book);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Book is create successfull',
    data: data,
  });
});
const getBooks = catchAsync(async (req, res) => {
  const data = await bookServices.getBooksFromDb();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Books fetched successfully',
    data: data,
  });
});
const getSingleBooks = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await bookServices.getSignleBookFromDb(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product fetched successfully',
    data: data,
  });
});
export const bookControllers = {
  addBook,
  getBooks,
  getSingleBooks,
};
