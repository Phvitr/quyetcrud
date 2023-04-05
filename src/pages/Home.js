import {Button, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Home(){
    const [products,setProducts]=useState();
    const navigate=useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/products', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            setProducts(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    const deleteProduct=(id)=>{
        navigate("/delete/"+id)
    }

    const handleCreate=()=>{
        navigate("/create")
    }
    const handleEdit=(id)=>{
        navigate("/edit/"+id)
    }
    return(
        <>
            <div className="container">
                <br/>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h4>Danh sách sản phẩm</h4>
                    <Button variant='primary' onClick={handleCreate}>Thêm sản phẩm</Button>
                </div>
                <br/>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Tồn kho</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {products && products.map((product,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td><Link to={`/detail/${product.id}`} >{product.name}</Link></td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td style={{display:"flex",justifyContent:"center"}}>
                                <Button variant="primary" onClick={()=>{handleEdit(product.id)}}>Cập nhật</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="danger" onClick={()=>{deleteProduct(product.id)}} >Xóa</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>

        </>
    )
}
export default Home;