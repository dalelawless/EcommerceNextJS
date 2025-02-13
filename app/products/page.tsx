import ProductsList from "../products-list";

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/products');
    const products = await response.json();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <ProductsList products={products} initialCartProducts={[]} />
        </div> 
    );
}