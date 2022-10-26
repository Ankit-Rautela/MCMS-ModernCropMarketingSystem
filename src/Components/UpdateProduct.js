import React from 'react'
// import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProduct = () => {

    // Defining State
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [owner, setOwner] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

//     useEffect(() => {
//         getProductDetail();
//     },[])

//     const getProductDetail = async () => {
//         console.warn(params)
//         let result = await fetch(`http://localhost:5000/product/${params.id}`);
//         result = await result.json();
//         setName(result.name);
//         setPrice(result.price);
//         setCategory(result.category);
//         setOwner(result.owner);
//     }

    const updateProduct = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method: 'Put',
            body: JSON.stringify({name, price, category, owner}),
            headers:{
                'Content-Type':"application/json"
            }
        });
        result = result.json()
        console.warn(result)
        navigate('/') 
    }

    return (
        <div>
            <h2><b>Update Product</b></h2>
            <form>
                <div className="form-group mt-0 shadow-sm p-4 mb-0 bg-white">
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter product's name"
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group mt-0 shadow-sm p-4 mb-0 bg-white">
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter product's price"
                        value={price} onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-group mt-0 shadow-sm p-4 mb-0 bg-white">
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter product's category"
                        value={category} onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div className="form-group mt-0 shadow-sm p-4 mb-0 bg-white">
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter product's Owner"
                        value={owner} onChange={(e) => setOwner(e.target.value)}
                    />
                </div>

                <button onClick={updateProduct} type="button" className="btn btn-primary mt-2">Update</button>

            </form>

        </div>
    )
}

export default UpdateProduct;
