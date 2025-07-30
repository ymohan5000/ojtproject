export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {
    stars: number;
    count: number;
  };
};

export type CartItem = Product & {
  quantity: number;
};
