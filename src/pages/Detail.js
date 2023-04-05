import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "react-bootstrap";

function Detail(){
    const {id}=useParams();
    const [detail,setDetail]=useState({});
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:3001/products/"+id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            setDetail(res.data)
        }).catch(err => {
            console.log(err)
        })
    })


    const handleBack=()=>{
        navigate("/")
    }
    return(
        <>
            <div className="container col-lg-10">
                <br/>
                <br/>
                <div  style={{display:"flex",justifyContent:"space-between"}}>
                    <h3>Chi tiết sản phẩm</h3>
                    <Button variant="primary" onClick={handleBack}>Danh sách</Button>
                </div>
                <div className="row">
                    <div className="col-3">
                        <h6>Tên sản phẩm</h6>
                        <h6>Giá(đ)</h6>
                        <h6>Tồn kho</h6>
                    </div>
                    <div className="col-6">
                        <h6>{detail.name}</h6>
                        <h6>{detail.price}</h6>
                        <h6>{detail.stock}</h6>
                    </div>
                    <hr/>
                    <div>
                        <h6>Mô tả</h6>
                        <h6>{detail.description}</h6>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Detail;