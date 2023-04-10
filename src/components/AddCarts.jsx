import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartImg from './cart.gif'
import { Row, Col, Divider, message } from 'antd'
import { MdDeleteOutline } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import { DLT } from '../redux/actions/Action';


function AddCarts() {
  const navigate = useNavigate()
  const getCartItem = useSelector((state) => state.cartReducer.carts)
  const [addCart, setAddCart] = useState(getCartItem)
  const [totalAmount,setTotalAmount]=useState(0)

  // const AllData=()=>{
  //   console.log(getCartItem);
  //   return getCartItem
  // }


  const dispatch=useDispatch()
   

  const deleteCart=(id)=>{
      dispatch(DLT(id))
      setAddCart(getCartItem)
      message.success('deleted item !')
      console.log('deleted');
  }
  const totalAmounthandle=()=>{
    let price=0;
    addCart.map((pr,index)=>{
      price=pr.price+price
    })
    setTotalAmount(price)
  }
useEffect(()=>{
  totalAmounthandle()
 
},[totalAmount])

  return (
    <div className='container'>
      <div className="addcart">
        <div className="totalAmout">
          <h4 style={{ color: 'navy' }}>All Cart Products</h4>
          <h4>Total Ampunt : ₹ {totalAmount}</h4>
        </div>
        <Divider />
        <Row gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}>
          {getCartItem.length == 0 ? <div className='cartEmptys'>
          <div className="showEmpty"><h5 style={{ color: 'red' }}>Cart Empty</h5></div> 
           <div className="emptycart"> <img src={CartImg} alt='cart-image' style={{ width: '300px' }} /></div>
           </div> : <>

            {addCart.map((cartData) => {
              return (
                <Col className="gutter-row" span={12} key={cartData.id}>
                  <div className="allcartInfo" id='addData' >
                   
                    <div className="cartImage">
                     <NavLink to={`/cartDetails/${cartData.id}`}> <img src={cartData.imgdata} style={{ height: '250px', width: '280px', padding: '20px', borderRadius: '10px' ,cursor:'pointer'}} /></NavLink> 
                    </div>
                    <div className="cartInfo">
                      <div className="rightSide">
                        <p><strong>Resturent</strong>: {cartData.rname} </p>
                        <p><strong>Price</strong>: ₹ {cartData.price} </p>
                        <p><strong>Quantity</strong>: {cartData.qnty}</p>
                        
                      </div>
                      <div className="leftSide">
                        <h6><span style={{ color: 'red', fontSize: '24px', cursor: 'pointer' }}><MdDeleteOutline onClick={(id)=>deleteCart(cartData.id)}/></span></h6>

                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}

          </>
          }
        </Row>
      </div>
    </div>
  )
}

export default AddCarts
