import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import * as ordersAPI from '../../utilities/orders-api';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import './CheckoutPage.css';


export default function CheckoutPage({ setUser, cart, setCart }) {
  useEffect(() => {
    async function getCart(){
      const cartFromDB = await ordersAPI.getCart();
      setCart(cartFromDB);
    }
    getCart();
    }, []);
    
  return (
    <main className="CheckoutPage">
  <div className="ShippingAddressSection">
  <h2>Shipping Address</h2>
      <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
  <Button variant="dark" >Submit</Button>
</Form>
</div>
<div className="OrderSummarySection">
<Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Order Summary</Card.Title>
            <Card.Text>Sub Total ${cart.orderTotal}</Card.Text>
            <Card.Text>Shipping TBD</Card.Text>
            <Card.Text>Estimated Tax $0.00</Card.Text>
            <Card.Text>TOTAL ${cart.orderTotal}</Card.Text>
            <Button variant="dark">PAY</Button>
        </Card.Body>
    </Card>
  </div>
    </main>
  )
}
