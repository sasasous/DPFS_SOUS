import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

export const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://localhost:3000/api/index')
        .then(res => res.json())
        .then(data => setProducts(data.index))
        .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h3>Catálogo de productos</h3>
            {products ? (
                <ul>
                    {products.map((p) => (
                        <Link key={p.id} to = {'products/${p.id}'}>
                            <div>
                                <h4>{p.name}</h4>
                                <p>${p.price}</p>
                                <img src={p.image} alt={p.name} />
                            </div>
                        </Link>
                    ))}
                </ul>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
        );
    };