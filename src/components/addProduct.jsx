import React, { useState } from 'react';
import Navbar from './NavBar';
import { useNavigate } from 'react-router-dom';

function ProductForm() {
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [productType, setProductType] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [notification, setNotification] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    let productSpecificAttribute = '';
    if (productType === 'DVDDisc') {
      productSpecificAttribute = size;
    } else if (productType === 'Book') {
      productSpecificAttribute = weight;
    } else if (productType === 'Furniture') {
      productSpecificAttribute = `${height}x${width}x${length}`;
    }
    const productData = {
      sku: sku,
      name: name,
      price: price,
      type: productType,
      product_specific_attribute: productSpecificAttribute,
    };
    console.log(productData);
    // Make the POST request to the API
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setNotification('Product added successfully');
          navigate('/products');
        } else {
          setNotification('Error adding product');
        }
      })
      .catch((err) => {
        setNotification('Error adding product');
        console.log(err.message);
      });
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  return (
    <div>
      <Navbar handleSubmit={handleSubmit} />
      {notification ? (
        <div
          className='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'
          role='alert'
        >
          {notification}
        </div>
      ) : (
        ''
      )}
      <form
        id='product_form'
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'
        onSubmit={handleSubmit}
      >
        <label
          htmlFor='sku'
          className=' w-1/2 block text-gray-700 text-sm font-bold mb-2'
        >
          SKU:
        </label>
        <input
          className='shadow appearance-none border mb-2 rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          id='sku'
          value={sku}
          onChange={(event) => setSku(event.target.value)}
        />
        <br />
        <label
          htmlFor='name'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Name:
        </label>
        <input
          className='shadow appearance-none border mb-2 rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          id='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label
          htmlFor='price'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Price:
        </label>
        <input
          className='shadow appearance-none border mb-2 rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='number'
          id='price'
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <br />
        <label
          htmlFor='productType'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Product Type:
        </label>
        <select
          className='w-1/5 border border-black border-solid shadow m-1 rounded'
          id='productType'
          value={productType}
          onChange={handleProductTypeChange}
        >
          <option
            value=''
            className='block w-1/3 text-gray-700 text-sm font-bold mb-2'
          >
            Please select a product type
          </option>
          <option value='DVDDisc'>DVD</option>
          <option value='Book'>Book</option>
          <option value='Furniture'>Furniture</option>
        </select>
        <br />
        {productType === 'DVDDisc' && (
          <>
            <label
              htmlFor='size'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Size (in MB):
            </label>
            <input
              className='shadow appearance-none border mb-2 rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='number'
              id='size'
              value={size}
              onChange={(event) => setSize(event.target.value)}
            />
            <br />
          </>
        )}
        {productType === 'Book' && (
          <>
            <label
              htmlFor='weight'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Weight (in Kg):
            </label>
            <input
              className='shadow appearance-none border mb-2 rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='number'
              id='weight'
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
            <br />
          </>
        )}
        {productType === 'Furniture' && (
          <>
            <label
              htmlFor='length'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Length:
            </label>
            <input
              className='shadow appearance-none border mb-2 rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='number'
              id='length'
              value={length}
              onChange={(event) => setLength(event.target.value)}
            />
            <br />
            <label
              htmlFor='width'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Width:
            </label>
            <input
              className='shadow appearance-none border mb-2 rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='number'
              id='width'
              value={width}
              onChange={(event) => setWidth(event.target.value)}
            />
            <br />
            <label
              htmlFor='height'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Height:
            </label>
            <input
              className='shadow appearance-none border mb-2 rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='number'
              id='height'
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
            <br />
          </>
        )}
      </form>
    </div>
  );
}

export default ProductForm;
