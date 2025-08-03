export type IBook = {
  title: string;
  author: string;
  genre: string;
  publication: string;
  imageUrl: string;
  shortDescription: string;
  longDescription?: string;
  price?: number;
  sellPrice: number;
};
