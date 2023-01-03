import React, { useState } from "react";

function ProductForm() {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productType, setProductType] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server or save it in the database
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  return (
    <form
      id="product_form"
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="sku"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        SKU:
      </label>
      <input
        className="shadow appearance-none border mb-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        id="sku"
        value={sku}
        onChange={(event) => setSku(event.target.value)}
      />
      <br />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <br />
      <label htmlFor="productType">Product Type:</label>
      <select
        id="productType"
        value={productType}
        onChange={handleProductTypeChange}
      >
        <option value="">Please select a product type</option>
        <option value="DVD">DVD</option>
        <option value="Book">Book</option>
        <option value="Furniture">Furniture</option>
      </select>
      <br />
      {productType === "DVD" && (
        <>
          <label htmlFor="size">Size (in MB):</label>
          <input
            type="number"
            id="size"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          />
          <br />
        </>
      )}
      {productType === "Book" && (
        <>
          <label htmlFor="weight">Weight (in Kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
          <br />
        </>
      )}
      {productType === "Furniture" && (
        <>
          <label htmlFor="height">Height:</label>
        </>
      )}
    </form>
  );
}

export default ProductForm;
