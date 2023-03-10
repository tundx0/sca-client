import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';
// const dotenv = require("dotenv");
// export const CheckedItemsContext = createContext();

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from the API
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = () => {
    // Get the list of checked product SKUs
    const checkedProductSkus = products
      .filter((product) => product.checked)
      .map((product) => product.sku);

    fetch(`${process.env.REACT_APP_API_URL}/api/v1/product`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ skus: checkedProductSkus }),
    }).then(() => {
      // Fetch the updated list of products from the API
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/`)
        .then((response) => response.json())
        .then((data) => setProducts(data));
    });
  };

  return (
    <div className='App'>
      <Navbar handleDelete={handleDelete} />
      <div className='product-grid mt-8 ml-1 grid grid-cols-4 gap-4'>
        {products.map((product) => (
          <div
            key={product.sku}
            className='product border-2 border-gray-400 rounded-lg p-4 flex flex-col justify-center items-center'
          >
            <input
              type='checkbox'
              className='delete-checkbox'
              checked={product.checked}
              onChange={() =>
                setProducts((prevProducts) =>
                  prevProducts.map((p) =>
                    p.sku === product.sku ? { ...p, checked: !p.checked } : p
                  )
                )
              }
            />
            <div className='product-details'>
              <div>SKU: {product.sku}</div>
              <div>Name: {product.name}</div>
              <div>Price: ${product.price}</div>
              <div>
                {product.type === 'DVDDisc'
                  ? `Size: ${product.product_specific_attribute} MB`
                  : product.type === 'Furniture'
                  ? `Dimensions: ${product.product_specific_attribute}`
                  : product.type === 'Book'
                  ? `Weight: ${product.product_specific_attribute} KG`
                  : ''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
