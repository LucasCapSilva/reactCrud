import Category from "./Category";

interface Product{
    id: number;
    description: string;
    categoria?: Category| null;
}

export default Product;