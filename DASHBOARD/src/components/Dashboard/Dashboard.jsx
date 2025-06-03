import { Route, Routes } from "react-router-dom";
import { Catalog } from '../Catalog/Catalog';
import { Counter } from "../Counter/Counter";
import { LastProduct } from "../LastProduct/LastProduct";
import { ProductDetail } from '../ProductDetail/ProductDetail';
import './Dashboard.css';

export const Dashboard = () => {

  return (
    
    <div className = "dashboard">

      <h1>SOUS</h1>

      <Routes>

        <Route path="/" element={<><Counter/><Catalog/></>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/last-product" element={<LastProduct/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />

      </Routes>

    </div>

  );

};