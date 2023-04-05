import {Button} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function Delete(){
    const {id}=useParams();
    const [product,setProduct]=useState({})
    const [flag,setFlag]=useState(false)
    const navigate=useNavigate();

    const handleCancel=()=>{
        navigate("/")
    }
    const handleDelete=()=>{
            if (window.confirm('Bạn có chắc muốn xóa sản phẩm này không?')) {
                axios.delete('http://localhost:3001/products/' + id, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem('token')
                    }
                }).then(res => {
                    setFlag(!flag)
                })
                navigate('/')
            }
        }

    useEffect(() => {
        axios.get('http://localhost:3001/products/'+id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            setProduct(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <>
            <div className="container col-lg-10">
                <br/>
                <br/>
                <div  style={{display:"flex"}}>
                    <h3>Xóa sản phẩm</h3>
                </div>
                <div className="row">
                    <div className="col-3">
                        <h6>Tên sản phẩm</h6>
                        <h6>Giá(đ)</h6>
                        <h6>Tồn kho</h6>
                    </div>
                    <div className="col-6">
                        <h6>{product.name}</h6>
                        <h6>{product.price}</h6>
                        <h6>{product.stock}</h6>
                    </div>
                    <hr/>
                    <div>
                        <h6>Mô tả</h6>
                        <h6>{product.description}</h6>
                    </div>
                    <div>
                        <Button variant="danger" onClick={()=>{handleDelete(product.id)}}>Xóa</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="primary" onClick={handleCancel}>Hủy</Button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Delete;