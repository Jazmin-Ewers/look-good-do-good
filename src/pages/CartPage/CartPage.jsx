import { useEffect } from 'react';
import LineItem from '../../components/LineItem/LineItem';
import * as ordersAPI from '../../utilities/orders-api';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CartPage.css';

export default function CartPage({ cart, setCart, handleCheckout }) {
    useEffect(() => {
    async function getCart(){
      const cartFromDB = await ordersAPI.getCart();
      setCart(cartFromDB);
    }
    getCart();
    }, []);

    if (!cart) return null;
    const lineItems = cart.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={cart.isPaid}
      key={item._id}
    />
    );

  return (
    <main className="CartPage">
    {cart ?
    <div className="main-container">
      <div className="table-container">
        <div>SHOPPING BAG</div>
        <div className="table-row heading">
          <div className="row-item">PRODUCT</div>
          <div className="row-item">PRICE</div>
          <div className="row-item">QTY</div>
          <div className="row-item">TOTAL PRICE</div>
    </div>
    {cart.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={cart.isPaid}
      key={item._id}
    />
    )}
   </div>
   <div className="OrderSummaryCard">
   <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>ORDER SUMMARY</Card.Title>
            <Card.Text>Sub Total ${cart.orderTotal}</Card.Text>
            <Card.Text>Shipping TBD</Card.Text>
            <Card.Text>Estimated Tax $0.00</Card.Text>
            <Card.Text>TOTAL ${cart.orderTotal}</Card.Text>
            <Button variant="dark" onClick={() => handleCheckout()} disabled={!lineItems.length}>CHECKOUT</Button>
        </Card.Body>
    </Card>
    </div>
</div> : <div>YOUR SHOPPING BAG IS EMPTY</div>}
    </main>
  )
}
