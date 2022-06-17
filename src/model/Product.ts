import Category from "./Category";

interface Product{
    id: number;
    description: string;
    category?: Category| null;
}

export default Product;