
const products = [
    { id: 1, name: 'Laptop', price: 300000, category:'Electronic' },
    { id: 2, name: 'Book', price: 5000, category:'Paper' },
    { id: 3, name: 'Sneakers', price: 25000, category:'Sport' },
    { id: 4, name: 'Phone', price: 150000, category:'Electronic' }
]

function ProductsRender() {
    
    const productData = products.map((product) => 
        
        <div key={product.id} className="productCard">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <small>{product.category}</small>
        
        </div>
    )
    
    return (
        <div className="cardCont">
            {productData}
        </div>
    );
}

export default ProductsRender;