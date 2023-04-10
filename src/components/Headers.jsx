import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Badge } from 'antd';
import { BsCart3 } from "react-icons/bs";
import './style.css'
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigation} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

function Headers() {

  const getCartItem=useSelector((state)=>state.cartReducer.carts)
  console.log(getCartItem);
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to={'/'}><span style={{color:'#ff006e',fontSize:'24px'}}>Online Food Delivery</span></Navbar.Brand>
          <Nav className="me-auto">

            <NavLink as={Link} to={'/'}><span style={{color:'white',fontSize:'20px'}}>Home</span></NavLink>
          </Nav>
         
          <Link to="/carts">
          <Badge count={getCartItem.length}>
            <BsCart3 style={{ color: 'white', fontSize: '24px' }}  ></BsCart3>
          </Badge>  
            </Link> 
        </Container>
      </Navbar>
 
    </>
  )
}
export default Headers