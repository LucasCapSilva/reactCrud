import Product from "./Product";

interface Category{
    id: number;
    description: string;
    produtos?: Product[]| null;
}

export default Category;