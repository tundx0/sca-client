import ProductList from "./components/ProductList";
import ProductForm from "./components/addProduct";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/" element={<Navigate to="/products" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
