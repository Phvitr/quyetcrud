import {Button,Form} from "react-bootstrap";
import {useEffect, useState} from "react"
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {Formik} from "formik";

function Create() {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        name:"",
        price:"",
        stock:"",
        description:""
    });


    const handleAdd=async ()=>{
        let response=await axios.post('http://localhost:3001/products',formData);
        setFormData({
            name:"",
            price:"",
            stock:"",
            description:""
        })
        navigate("/");

    }

    const handleCancel=()=>{
        navigate("/")
    }

    return(
        <>
            <div className="container">
                <div className="col-9" >
                    <br/>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Tên sản phẩm</Form.Label>
                            <Form.Control type="text" placeholder="Tên sản phẩm" onChange={e=>{setFormData({...formData,name: e.target.value})}} />
                        </Form.Group>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <Form.Group className="mb-6" >
                                <Form.Label>Giá(đ)</Form.Label>
                                <Form.Control type="text" placeholder="Giá" onChange={e=>{setFormData({...formData,price: e.target.value})}}/>
                            </Form.Group>
                            <Form.Group className="mb-6" >
                                <Form.Label>Tồn kho</Form.Label>
                                <Form.Control type="text" placeholder="Tồn kho" onChange={e=>{setFormData({...formData,stock: e.target.value})}}/>
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-6" >
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control as="textarea" type="text" placeholder="Mô tả sản phẩm" onChange={e=>{setFormData({...formData,description: e.target.value})}}/>
                        </Form.Group>
                        <br/>
                        <div style={{display:"flex"}}>
                            <Button variant="primary" onClick={handleAdd}>Thêm mới</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="secondary"  onClick={handleCancel}>Hủy</Button>
                        </div>
                    </Form>
                </div>
            </div>


        </>
    )

}
export default Create;


