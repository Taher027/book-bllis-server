import { model, Schema } from 'mongoose';
import { IProduct } from './productInterface';

const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publication: { type: String, required: true },
  price: { type: Number },
  sellPrice: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String },
});

export const Products = model<IProduct>('Products', productSchema);
