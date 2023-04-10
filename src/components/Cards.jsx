import React, { useEffect, useState } from 'react'
import { Card, Row, Col,Typography, Divider, Button, message } from 'antd'
import Cardsdata from './CardData';
import { PlusOutlined  } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/Action';

const { Meta } = Card;
const { Title } = Typography;
function Cards() {
    
    const [cardData,setCardData]=useState(Cardsdata)
    const dispatch=useDispatch()
    
    const sendCart=(data)=>{
        dispatch(ADD(data))
        message.success('add successfull !')
        console.log(data);
        sessionStorage.setItem("userInfo", JSON.stringify(data))
    }


useEffect(()=>{
    console.log(Cardsdata);
},[])
    return (
        <div className='container'  >
            <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Food List</h3>
            <Row gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}>
                {cardData.map((data) => {
                    return(

                    <Col className="gutter-row" span={6} key={data.id}>
                        <div className="foodCard"  >
                            <Card
                                hoverable
                                style={{
                                    width: 270,
                                }}
                                cover={<img alt="example" src={data.imgdata} style={{height:'280px',width:'270px',padding:'10px'}}/>}
                            >
                                <Divider style={{marginTop:'-20px'}}/>
                                <Title level={4}>{data.rname}</Title>
                                <Meta title={`Pirce:  ₹ ${data.price}`} />
                                <Button type='default' icon={<PlusOutlined /> } block danger  onClick={()=>sendCart(data)}
                                style={{marginTop:'10px'}}>Add to Card</Button>
                            </Card>
                        </div>
                    </Col>
                    )
                })}

            </Row>
           
        </div>
    )
}

export default Cards
