import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function Update(){
    const {id}=useParams();
    const navigate=useNavigate();
    const [product,setProduct]=useState({
        name:"",
        price:"",
        stock:"",
        description:"",
    })

    useEffect(()=>{
        axios.get("http://localhost:3001/products/"+id)
            .then(res=>{setProduct(res.data)})
            .catch(err=>{
                console.log(err.message)})

    },[])

    const handleUpdate=async ()=>{
       await axios.put("http://localhost:3001/products/"+id, product)
           .then(res => {
               console.log(res.data)
               navigate("/")
        }).catch(err => {
            console.log(err)
        })
    }
    const handleCancel=()=>{
        navigate("/")
    }


    return (
        <>
            <div className="container">
                <div className="col-9" >
                    <br/>
                    <Form >
                        <Form.Group className="mb-3" >
                            <Form.Label>Tên sản phẩm</Form.Label>
                            <Form.Control type="text" placeholder="Tên sản phẩm" name="name" value={product.name} onChange={e=>setProduct({...product,name:e.target.value})} />
                        </Form.Group>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <Form.Group className="mb-6" >
                                <Form.Label>Giá(đ)</Form.Label>
                                <Form.Control type="text" placeholder="Giá" name="price" value={product.price}
                                              onChange={e=>setProduct({...product,price:e.target.value})}/>
                            </Form.Group>
                            <Form.Group className="mb-6" >
                                <Form.Label>Tồn kho</Form.Label>
                                <Form.Control type="text" placeholder="Tồn kho" name="stock" value={product.stock}
                                              onChange={e=>setProduct({...product,stock:e.target.value})}/>
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-6" >
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control as="textarea" type="text" placeholder="Mô tả sản phẩm" name="description" value={product.description}
                                          onChange={e=>setProduct({...product,description:e.target.value})}/>
                        </Form.Group>
                        <br/>
                        <div style={{display:"flex"}}>
                            <Button variant="primary" onClick={()=>{handleUpdate(product.id)}}>Cập nhật</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="secondary" onClick={handleCancel} >Hủy</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Update;
