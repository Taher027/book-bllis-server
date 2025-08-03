import express from 'express';
import validateRequests from '../../middlewares/validateRequest';
import { bookValidation } from './book.validation';
import { bookControllers } from './book.Controller';
const router = express.Router();

router.post(
  '/add-book',
  validateRequests(bookValidation.bookZodSchema),
  bookControllers.addBook,
);
router.get('/:id', bookControllers.getSingleBooks);
router.get('/', bookControllers.getBooks);
export const bookRoutes = router;
