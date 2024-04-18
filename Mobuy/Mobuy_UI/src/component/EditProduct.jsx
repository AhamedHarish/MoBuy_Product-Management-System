import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productService from '../service/product.service';

const EditProduct = () => {

  const [product,setProduct]=useState({
    id:"",
    productName:"",
    description:"",
    price:"",
    status:"",
});

const navigate =useNavigate();

 const {id} = useParams();
 console.log(id);

const handleChange=(e)=>{
    const value = e.target.value;
    setProduct({...product,[e.target.name]: value })
}

const [msg,setMsg]=useState("");

useEffect(()=>{
  productService.getProductById(id).then((res)=>{
    setProduct(res.data);
  }).catch((error)=>{
    console.log(error);
  })
},[]);

const ProductUpdate=(e)=>{
    e.preventDefault();

    productService.editProduct(product).then((res)=>{
        console.log("Product Updated Successfully");
        setMsg("Updated Successfully");
        navigate('/');
        setProduct({
            productName:"",
            description:"",
            price:"",
            status:"",
        })
    }).catch((error)=>{console.log(error);});
}
  return (
    <>
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 mt-3 ">
            <div className="card">
            <h2 className="card-header fs-3 text-center">Edit Product</h2>
            {msg && <p className='fs-4 text-center text-success'>{msg}</p>}
                <div className="card-body">
                    <form onSubmit={(e)=>ProductUpdate(e)}>
                        <div className="mb-3">
                            <label htmlFor="">Product Name:</label>
                            <input type='text' name='productName' onChange={(e)=>handleChange(e)} value={product.productName} className='form-control'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Description:</label>
                            <input type='text' name='description' onChange={(e)=>handleChange(e)} value={product.description} className='form-control'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Price:</label>
                            <input type='text' name='price' onChange={(e)=>handleChange(e)} value={product.price} className='form-control'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Status:</label>
                            <input type='text' name='status' onChange={(e)=>handleChange(e)} value={product.status} className='form-control'/>
                        </div>
                        <button className='btn btn-primary col-md-12 '>Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default EditProduct