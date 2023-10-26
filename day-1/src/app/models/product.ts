export interface IProduct {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    color: string;
    agency?: string;
}