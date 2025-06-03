import { useEffect, useState } from "react";
import { Product } from "../Product/Product";

export const LastProduct = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/products/last-product")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>

      <h3>ÚLTIMO PRODUCTO</h3>

      {product ? <Product product={product} /> : <p>Cargando...</p>}

    </div>
  );
};