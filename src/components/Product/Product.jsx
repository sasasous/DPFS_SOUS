export const Product = ({ product }) => {
  return (

    <div key={product.id}>
        <h4>{product.name}</h4>
        <p>${product.price}</p>
        {product.image}
    </div>

  );
};