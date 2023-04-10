import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Typography, message, Button } from 'antd'
import { MdDeleteOutline } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD, DLT } from '../redux/actions/Action';


const { Meta } = Card;
const { Title } = Typography;

function CardDetails() {
    const [product, setProduct] = useState([])
    const [countFood,setCountFood]=useState()

    const navigate = useNavigate()


  const dispatch=useDispatch()


    const { id } = useParams()
    console.log(id);
    const getCartItem = useSelector((state) => state.cartReducer.carts)
    console.log('card-details', getCartItem);

    useEffect(() => {
        campaire()
    }, [id])

    const campaire = () => {
        const compaireId = getCartItem.filter((e) => {
            return e.id == id
        })
        setProduct(compaireId);
        console.log(product);
    }

    const deleteCart=(id)=>{
      dispatch(DLT(id))
      navigate('/')
      message.success('deleted item !')
      console.log('deleted');
  }

  const sendCart=(data)=>{
    dispatch(ADD(data))
    message.success('add successfull !')
    console.log(data);
    sessionStorage.setItem("userInfo", JSON.stringify(data))
}
    return (
        <div className='container'>
            <div className="cardItem">
                <h3>Food Details</h3>
                {product.map((data) => {
                    return (
                        <div className="allcartInfos" key={data.id}>

                            <div className="cartImage" >
                                <img src={data.imgdata} style={{ height: '250px', width: '280px', padding: '20px', borderRadius: '10px' }} />
                            </div>
                            <div className="cartInfo">
                                <div className="rightSide">
                                    <p><strong>Resturent</strong>: {data.rname} </p>
                                    <p><strong>Price</strong>: {data.price} </p>
                                    <p><strong>Quantity</strong>: {data.qnty}</p>
                                    <p><strong>Dishes</strong>: {data.address}</p>
                                    <p><strong>Total</strong>: 1000</p>
                                    <div className="increamentFood">
                                        <Button type='default' onClick={sendCart}>+</Button>
                                        
                                        <Button type='default'>-</Button>
                                    </div>
                                </div>
                                <div className="leftSide">
                                    <p><strong>Rating </strong>:  <span style={{ backgroundColor: 'green', borderRadius: '10px', padding: '5px 10px', color: 'white' }}> {data.rating}  ⭐⭐⭐</span> </p>
                                    <p><strong>Customer review</strong>: {data.somedata} </p>
                                    <h6><strong>Remove</strong> :<span style={{ color: 'red', fontSize: '24px', cursor: 'pointer' }}><MdDeleteOutline onClick={(id=>deleteCart(data.id))}/></span></h6>

                                </div>

                            </div>

                        </div>
                    )
                })}


            </div>

        </div>
    )
}

export default CardDetails
