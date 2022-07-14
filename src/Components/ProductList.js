import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';


const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {

        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    const searchHandle = async (event) => {
        console.warn();
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result) {
                setProducts(result)
            }
        }
        else {
            getProducts();
        }
    }

    return (
        <div>
            <h3>Product List</h3>
            <div class="mb-0 mt-0 p-4 input-group">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={searchHandle} />
            </div>
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-bordered table-striped mb-0">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 ? products.map((item, index) =>
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>₹ {item.price}</td>
                                    <td>{item.category}</td>
                                    <td><Link to={"/update/" + item._id} type="button" class="btn btn-outline-warning">Update</Link>
                                        .
                                        <button onClick={() => deleteProduct(item._id)} type="button" class="btn btn-outline-danger">Delete</button></td>
                                    {/* <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                    <button class="btn btn-primary me-md-2" type="button">Button</button>
                                    <button class="btn btn-primary" type="button">Button</button>
                                </div> */}
                                </tr>
                            )
                                :
                                <h1>No Result Found</h1>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList;