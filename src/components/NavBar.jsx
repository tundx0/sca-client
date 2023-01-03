import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="border-b-2 py-2 px-4 flex justify-between items-center">
      <div className="text-blue-700 text-[20px] font-sans font-bold hover:text-blue-800">
        <h1 className="">Product List</h1>
      </div>
      <div>
        <Link
          to="/add-product"
          className="bg-blue-500 text-white font-bold font-sans py-2 px-4 rounded-full hover:bg-blue-600"
        >
          ADD
        </Link>
        <button
          onClick={props.handleDelete}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600"
        >
          MASS DELETE
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
