import React from 'react'
import {useNavigate} from 'react-router-dom'

const AddProduct = () => {

    // Defining State
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [owner, setOwner] = React.useState('');
    const [error, setError] = React.useState(false);

    const navigate = useNavigate();

    const addProduct = async () => {

        console.warn(!name);
        if (!name || !price || !category || !owner) {
            setError(true);
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: 'post',
            body: JSON.stringify({ name, price, category, owner, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/')
    }

    return (
        <div>
            <h2><b>Add Product</b></h2>
            <form>
                <div className="form-group mt-0 shadow-sm p-4 mb-0 bg-white">
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter product's name"
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                    {error && !name && <h6>Enter valid name<span class="badge badge-secondary"></span></h6>}
                </div>
                <div className="form-group mt-0 shadow-sm p-4 mb-0 bg-white">
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter product's price"
                        value={price} onChange={(e) => setPrice(e.target.value)}
                    />
                    {error && !price && <h6>Enter valid price<span class="badge badge-secondary"></span></h6>}
                </div>
                <div className="form-group mt-0 shadow-sm p-4 mb-0 bg-white">
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter product's category"
                        value={category} onChange={(e) => setCategory(e.target.value)}
                    />
                    {error && !category && <h6>Enter valid category<span class="badge badge-secondary"></span></h6>}
                </div>
                <div className="form-group mt-0 shadow-sm p-4 mb-0 bg-white">
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter product's Owner"
                        value={owner} onChange={(e) => setOwner(e.target.value)}
                    />
                    {error && !owner && <h6>Enter valid owner<span class="badge badge-secondary"></span></h6>}
                </div>

                <button onClick={addProduct} type="button" className="btn btn-outline-primary">Add</button>

            </form>

        </div>
    )
}

export default AddProduct;